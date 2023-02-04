import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import { isAndroid } from "react-device-detect";

import data from "../data";
export const common = { ...actions };
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const IS_ACCESSIBLE = "IS_ACCESSIBLE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";

export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";

export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";

export const SUBMIT_ANSWER_MCQ = "SUBMIT_ANSWER_MCQ";
export const QUESTIONS_DATA = "QUESTIONS_DATA";

export const QUESTIONS_COUNT = "QUESTIONS_COUNT";

export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";

export const SET_DRAGGABLE_VALUE = "SET_DRAGGABLE_VALUE";

export const SUBMIT_ANSWER_DND = "SUBMIT_ANSWER_DND";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SET_STATIC = "SET_STATIC";
export const SET_ITEMS_MATCHED = "SET_ITEMS_MATCHED";
export const UPDATE_ITEMS_MATCHED = "UPDATE_ITEMS_MATCHED";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const LEVEL_ONE = "LEVEL_ONE";
export const DROPPABLE_CHNAGE_STATE = "DROPPABLE_CHNAGE_STATE";
export const SET_SUBMIT_BUTTON_DISABLED = "SET_SUBMIT_BUTTON_DISABLED";
export const DROPPABLE_CHANGE_FALSE = "DROPPABLE_CHANGE_FALSE";

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const droppableChangeFalse = (resetValue) => {
  return {
    type: DROPPABLE_CHANGE_FALSE,
    resetValue,
  };
};

export const setSubmitBtnDisabled = (val) => ({
  type: SET_SUBMIT_BUTTON_DISABLED,
  val,
});

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const setActivityCompleted = (completed) => ({
  completed,
  type: SET_ACTIVITY_COMPLETED,
});

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const submitAnswerMcq = (answer) => ({
  type: SUBMIT_ANSWER_MCQ,
  answer,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const setDraggableValue = (dragValue) => ({
  dragValue,
  type: SET_DRAGGABLE_VALUE,
});

export const submitAnswerDnD = (dropValue) => ({
  type: SUBMIT_ANSWER_DND,
  dropValue,
});

export const setStatic = (staticState) => {
  return {
    type: SET_STATIC,
    staticState,
  };
};

export const itemsMatched = (drag, drop) => ({
  drag,
  drop,
  type: SET_ITEMS_MATCHED,
});

export const updateItemsMatched = (items) => ({
  items,
  type: UPDATE_ITEMS_MATCHED,
});

export const levelOneCompleteAction = (value) => {
  return {
    type: LEVEL_ONE,
    value,
  };
};

export const droppableChangeState = (value, blnState) => {
  return {
    type: DROPPABLE_CHNAGE_STATE,
    value,
    blnState,
  };
};

export const thunks = {
  activityLoaded: () => {
    return (dispatch) => {
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },

  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData, questionCount } = getState();

      const _questionsData = questionsData.map((q) => ({ ...q }));
      const index = Math.floor(Math.random() * _questionsData.length);

      const question = questionsData.filter((ques) => {
        return questionCount == ques.srNo;
      });

      dispatch(setQuestion([...question]));
    };
  },

  onDrop: (dropzone) => (dispatch, getState) => {
    let { setDraggable: dragItem } = getState();

    dispatch(itemsMatched(dragItem, dropzone));
    dispatch(setDraggableValue({}));

    let txt1 =
      dragItem.arialabel + " " + data.liveAriaTxt + " " + dropzone.label;

    if (isAndroid) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(txt1));
      }, 500);
    } else {
      dispatch(common.thunks.ariaLiveAssertive(txt1));
    }
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(setActivityCompleted(false));
      dispatch(togglePopup(1));

      dispatch(ariaLiveText(data.resetLiveText));

      dispatch(setDraggableValue(""));
      dispatch(updateItemsMatched([]));
      dispatch(questionCount(1));
      dispatch(droppableChangeFalse());
      TincanManager.resetTincanData();
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(setStatic(true));
        dispatch(submitButtonPressed(false));
        dispatch(togglePopup(3));
        dispatch(submitAnswerMcq(false));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(submitButtonPressed(false));
        dispatch(setStatic(true));
        dispatch(togglePopup(4));
        dispatch(submitAnswerMcq(false));
      }

      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },

  submitAnswerDnD: (data) => (dispatch, getState) => {
    let { matchedItems } = getState();
    let flag = true;
    for (let item of matchedItems) {
      if (item.drag.answerId !== item.drop.answerId) {
        flag = false;
        break;
      }
    }

    if (!flag) {
      const _matchedItems = matchedItems.filter(
        (item) => item.drag.answerId == item.drop.answerId
      );
      dispatch(updateItemsMatched(_matchedItems));
      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 500);
      dispatch(toggleToastMessage(true));
      dispatch(submitButtonPressed(true));
      dispatch(submitAnswerMcq(false));
      dispatch(wrongAnswer(true));
    } else {
      setTimeout(() => {
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }, 500);
      TincanManager.data.completed = true;
      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();
      dispatch(toggleToastMessage(true));
      dispatch(submitButtonPressed(true));
      dispatch(submitAnswerMcq(true));
    }
  },

  submitAnswerMcq: (answer) => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        selectedAnswerOption,
        questionsData,
        questionCount,
      } = getState();

      if (selectedAnswerOption == selectedQuestion[0].answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        TincanManager.data.percentage = parseInt(
          ((questionCount / data.equationsData.length) * 100) / 2 + 50
        );
        TincanManager.saveTincanData();
        dispatch(toggleToastMessage(true));
        dispatch(setSubmitBtnDisabled(true));
        dispatch(submitAnswerMcq(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(toggleToastMessage(true));
        dispatch(wrongAnswer(true));
        dispatch(setSubmitBtnDisabled(false));
      }

      dispatch(submitButtonPressed(true));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const { setStatic: staticState } = getState();
      if (staticState) {
      } else {
        let { questionCount: count } = getState();
        if (count < data.equationsData.length) {
          dispatch(questionCount(count + 1));
          dispatch(thunks.setQuestion());
          dispatch(submitAnswerMcq(false));

          dispatch(selectAnswerOption(""));
          dispatch(wrongAnswer(false));
          dispatch(setSubmitBtnDisabled(true));
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          });
        } else {
          dispatch(togglePopup(3));
          setTimeout(() => {
            EventManager.broadcast("COMPLETION_SCREEN");
          });
        }
      }
      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
      });
    };
  },
};
