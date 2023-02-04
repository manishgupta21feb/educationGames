import data from "../data";
import * as actions from "../../app/actions";
const {
  ariaLiveText,
  togglePopup,
  setResetFocusState,
  toggleToastMessage,
  updateResetBtnState,
} = actions;

export const ELEMENT_DATA = "ELEMENT_DATA";
export const DROP_ELEMENT = "DROP_ELEMENT";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SET_ANIMATION = "SET_ANIMATION";
export const UPDATE_ATTEMPT = "UPDATE_ATTEMPT";
export const SIMULATION_END = "SIMULATION_END";
export const RESET_QUESTION = "RESET_QUESTION";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const UPDATE_DROP_ITEM = "UPDATE_DROP_ITEM";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const UPDATE_DROPPED_ITEMS_FROM_ARRAY =
  "UPDATE_DROPPED_ITEMS_FROM_ARRAY";

export const common = { ...actions };
export const setAnimation = (val) => ({ val, type: SET_ANIMATION });
export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });
export const simulationEnd = (val) => ({ val, type: SIMULATION_END });
export const resetQuestion = (val) => ({ val, type: RESET_QUESTION });
export const correctAnswer = (val) => ({ val, type: CORRECT_ANSWER });
export const selectQuestion = (val) => ({ val, type: SELECT_QUESTION });
export const updateDropElement = (val) => ({ val, type: DROP_ELEMENT });
export const updateElementData = (val) => ({ val, type: ELEMENT_DATA });
export const updateAttemptData = (val) => ({ val, type: UPDATE_ATTEMPT });
export const answerAttempted = (attempted) => ({
  attempted,
  type: ANSWER_ATTEMPTTED,
});

export const updateDropItems = (item, index) => ({
  item,
  index,
  type: UPDATE_DROP_ITEM,
});

//helper
export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

const verifyAnswer = (attempted, expected) => {
  const incorrectItems = [];
  for (let key in attempted) {
    if (attempted[key] !== expected[key]) {
      incorrectItems.push(attempted[key]);
    }
  }
  return incorrectItems;
};

const updateDroppedItemsFromArray = (itemsArray) => ({
  itemsArray,
  type: UPDATE_DROPPED_ITEMS_FROM_ARRAY,
});

export const thunks = {
  updateDropItems: (item, index) => (dispatch, getState) => {
    dispatch(updateDropItems(item, index));
    const { elementName } = data.elementData.filter(
      (e) => e.shortName == item
    )[0];
    const liveText = data.dropLiveText
      .replace("-1-", elementName)
      .replace("-2-", index + 1);
    // dispatch(common.ariaLiveText(liveText));
    // setTimeout(() => {
    //   dispatch(common.ariaLiveText(" "));
    // }, 200);
    dispatch(common.ariaLiveAssertive(" "));
    setTimeout(() => {
      dispatch(common.ariaLiveAssertive(liveText));
    }, 100);
    setTimeout(() => {
      dispatch(common.ariaLiveAssertive(" "));
    }, 500);
  },
  fetchQuestion: () => {
    return (dispatch, getState) => {
      data.elementData.sort(() => Math.random() - 0.5);
    };
  },
  updateAttempt: (val) => {
    return (dispatch, getState) => {
      const { updateAttempt, dropElement, droppedItems } = getState();
      dispatch(updateAttemptData([...updateAttempt, val]));

      let temp = {
        // update drag element value to show on periodic table
        ...dropElement,
        [val]: true,
      };
      dispatch(updateDropElement(temp));
    };
  },

  submitAnswer: (val) => {
    return (dispatch, state) => {
      const { droppedItems, selectedQuestion } = state();
      const check = verifyAnswer(
        droppedItems,
        data.questionData.filter((q) => q.id === selectedQuestion)[0]
          .correctSequence
      );
      if (check.length) {
        const _droppedItems = [...droppedItems];
        for (let key in _droppedItems) {
          if (check.indexOf(_droppedItems[key]) >= 0) {
            _droppedItems[key] = "";
          }
        }
        if (check.length < 6) {
          dispatch(updateToastMsg("partialcorrect"));
        } else {
          dispatch(updateToastMsg("incorrect"));
          dispatch(updateDroppedItemsFromArray(["", "", "", "", "", ""]));
          dispatch(updateDropElement({}));
        }
        dispatch(toggleToastMessage(true));
        dispatch(updateDroppedItemsFromArray(_droppedItems));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      } else {
        dispatch(updateToastMsg("correct"));
        dispatch(correctAnswer(true));
        dispatch(toggleToastMessage(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
        dispatch(answerAttempted(false));
        setTimeout(() => {
          if (selectedQuestion == 1) {
            dispatch(ariaLiveText(data.liveTextQ1));
          } else if (selectedQuestion == 2) {
            dispatch(ariaLiveText(data.liveTextQ2));
          } else if (selectedQuestion == 3) {
            dispatch(ariaLiveText(data.liveTextQ3));
          }
          setTimeout(() => {
            dispatch(ariaLiveText(" "));
          }, 200);
        }, 700);
      }
    };
  },

  onCorrectDrop: (currentDropElem) => {
    return (dispatch, getState) => {
      const { updateAttempt } = getState();
      if (updateAttempt.length >= 6) {
        dispatch(answerAttempted(true));
      } else {
        dispatch(updateToastMsg("correct"));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }
    };
  },
  onInCorrectDrop: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("incorrect"));
      dispatch(toggleToastMessage(true));
      EventManager.broadcast("INCORRECT_DRAG_REVERT");
    };
  },
  resetGame: () => {
    return (dispatch, getState) => {
      const { droppedItems } = getState();
      dispatch(togglePopup(1));
      if (!droppedItems.length) {
        dispatch(thunks.fetchQuestion());
      }
      dispatch(updateAttemptData([]));
      dispatch(updateResetBtnState(true));
      dispatch(updateDroppedItemsFromArray(["", "", "", "", "", ""]));
      dispatch(correctAnswer(false));
      dispatch(updateToastMsg(""));
      dispatch(selectQuestion(1));
    };
  },

  generateNextQuestion: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, elementData } = getState();
      if (selectedQuestion === 3) {
        dispatch(togglePopup(6));
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        dispatch(common.setResetFocusState(true));
        dispatch(selectQuestion(selectedQuestion + 1));
        dispatch(correctAnswer(false));
        dispatch(thunks.fetchQuestion());
        dispatch(updateAttemptData([]));
        dispatch(updateDropElement({}));
        dispatch(updateToastMsg(""));
        dispatch(updateDroppedItemsFromArray(["", "", "", "", "", ""]));
        dispatch(toggleToastMessage(false));
        dispatch(setResetFocusState(true));
        EventManager.broadcast("SECONDARY_CLICK");
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }
      dispatch(ariaLiveText(" "));
    };
  },
};
