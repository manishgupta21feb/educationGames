import * as actions from "../../app/actions";
import data from "../data";
export const SET_MCQ1 = "SET_MCQ1";
export const RESET_MCQ1 = "RESET_MCQ1";
export const SET_QUESTION = "SET_QUESTION";
export const SET_MCQ1_ANSWER = "SET_MCQ1_ANSWER";
export const SET_QUESTION_ANSWERED = "SET_QUESTION_ANSWERED";
export const TOGGLE_POPUP = "TOGGLE_POPUP";

const {
  togglePopup,
  ariaLiveText,
  onChangeScreen,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const common = { ...actions };
export const resetMCQ1 = () => ({ type: RESET_MCQ1 });
export const setMCQ1 = (mcqs) => ({ mcqs, type: SET_MCQ1 });
export const setQuestion = (question) => ({ question, type: SET_QUESTION });
export const setMCQ1Answer = (answer) => ({ answer, type: SET_MCQ1_ANSWER });
export const setQuestionAnswered = (answered) => ({
  answered,
  type: SET_QUESTION_ANSWERED,
});

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
export const SET_MCQ_QUESTION = "SET_MCQ_QUESTION";
export const RESET_MCQ_QUESTION = "RESET_MCQ_QUESTION";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const UPDATE_DROPPED_ITEMS_FROM_ARRAY =
  "UPDATE_DROPPED_ITEMS_FROM_ARRAY";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";

export const setAnimation = (val) => ({ val, type: SET_ANIMATION });
export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });
export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });
export const simulationEnd = (val) => ({ val, type: SIMULATION_END });
export const resetMcqQuestion = (val) => ({ val, type: RESET_MCQ_QUESTION });
export const resetQuestion = (val) => ({ val, type: RESET_QUESTION });
export const correctAnswer = (val) => ({ val, type: CORRECT_ANSWER });
export const selectQuestion = (val) => ({ val, type: SELECT_QUESTION });
export const updateDropElement = (val) => ({ val, type: DROP_ELEMENT });
export const updateElementData = (val) => ({ val, type: ELEMENT_DATA });
export const updateAttemptData = (val) => ({ val, type: UPDATE_ATTEMPT });
export const setMcqQuestion = (question) => ({
  type: SET_MCQ_QUESTION,
  question,
});
export const answerAttempted = (attempted) => ({
  attempted,
  type: ANSWER_ATTEMPTTED,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
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
  onInit: () => (dispatch) => {
    dispatch(thunks.generateNextQuestion());
    dispatch(togglePopup(1));
  },

  setMCQ1Answer: (answer) => (dispatch, getState) => {
    dispatch(setMCQ1Answer(answer));
    EventManager.broadcast("STOP_ALL");
    dispatch(toggleToastMessage(false));
    if (getState().resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },

  generateNextQuestion: () => (dispatch, getState) => {
    const { currentScreen, selectedQuestion } = getState();
    if (currentScreen == 0) {
      const { mcq1 } = getState();
      if (mcq1.length) {
        const _mcq1 = [...mcq1];
        const random = Math.floor(_mcq1.length * Math.random());
        const question = { ..._mcq1.splice(random, 1)[0] };
        dispatch(setResetFocusState(true));
        dispatch(setQuestion(question));
        dispatch(setMCQ1(_mcq1));
      } else {
        // show transition popup
        dispatch(togglePopup(4));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
      }
    } else {
      if (selectedQuestion === 8) {
        dispatch(togglePopup(6));
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        dispatch(common.setResetFocusState(true));
        if (selectedQuestion === 1) {
          dispatch(updateDroppedItemsFromArray(["", "", "", ""]));
        } else if (selectedQuestion === 2 || selectedQuestion === 3) {
          dispatch(updateDroppedItemsFromArray(["", "", ""]));
        }
        if (selectedQuestion <= 3) {
          dispatch(thunks.fetchQuestion());
        } else {
          dispatch(thunks.setQuestion());
        }
        dispatch(selectQuestion(selectedQuestion + 1));
        dispatch(correctAnswer(false));
        dispatch(thunks.fetchQuestion());
        dispatch(updateAttemptData([]));
        dispatch(updateDropElement({}));
        dispatch(updateToastMsg(""));

        dispatch(toggleToastMessage(false));
        dispatch(setResetFocusState(true));
        EventManager.broadcast("SECONDARY_CLICK");
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }
      dispatch(ariaLiveText(" "));
    }
  },

  submitMCQAnswer: () => (dispatch, getState) => {
    const { question, currentScreen } = getState();
    let check = false;
    if (currentScreen == 0) {
      const { mcq1Answer } = getState();
      check = question && mcq1Answer && question.answer[0] == mcq1Answer;
    }
    dispatch(setQuestionAnswered(check));
    dispatch(toggleToastMessage(true));
    setTimeout(() => {
      EventManager.broadcast(check ? "POSITIVE_FEEDBACK" : "NEGATIVE_FEEDBACK");
    }, 200);
  },

  moveToNextQuestion: () => (dispatch, getState) => {
    dispatch(setResetFocusState(true));
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 10);
    dispatch(setMCQ1Answer(""));
    dispatch(toggleToastMessage(false));
    dispatch(setQuestionAnswered(false));
    dispatch(thunks.generateNextQuestion());
  },
  resetActivity1: () => (dispatch, getState) => {
    const { droppedItems, questionsData } = getState();
    dispatch(resetMCQ1());
    dispatch(ariaLiveText(data.resetLiveText));
    dispatch(onChangeScreen(0));
    dispatch(setMCQ1Answer(""));
    dispatch(updateResetBtnState(true));
    dispatch(toggleToastMessage(false));
    dispatch(setQuestionAnswered(false));
    dispatch(thunks.generateNextQuestion());
    dispatch(selectQuestion(1));
    dispatch(
      updateQuestionsData(helper.shuffleArray([...data.radioQuestionsData]))
    );
    if (!droppedItems.length) {
      dispatch(thunks.fetchQuestion());
    }
    dispatch(updateAttemptData([]));
    dispatch(updateResetBtnState(true));
    dispatch(selectQuestion(1));
    const { currentPopup, selectedQuestion } = getState();
    dispatch(updateDroppedItemsFromArray(["", "", "", ""]));

    dispatch(correctAnswer(false));
    dispatch(updateToastMsg(""));
    let popupid = -1;
    if (currentPopup.indexOf(2) >= 0) {
      popupid = 2;
      dispatch(togglePopup(popupid));
    } else if (currentPopup.indexOf(5) >= 0) {
      popupid = 5;
      dispatch(togglePopup(popupid));
    }
    setTimeout(() => {
      dispatch(togglePopup(1));
    }, 60);
  },

  resetActivity: () => (dispatch, getState) => {
    const { currentPopup, droppedItems, selectedQuestion } = getState();
    dispatch(resetMCQ1());
    dispatch(ariaLiveText(data.resetLiveText));
    dispatch(onChangeScreen(0));
    dispatch(setMCQ1Answer(""));
    dispatch(updateResetBtnState(true));
    dispatch(toggleToastMessage(false));
    dispatch(setQuestionAnswered(false));
    dispatch(thunks.generateNextQuestion());

    if (!droppedItems.length) {
      dispatch(thunks.fetchQuestion());
    }
    dispatch(updateAttemptData([]));
    dispatch(updateResetBtnState(true));
    dispatch(selectQuestion(1));
    if (selectedQuestion === 1 || selectedQuestion === 2) {
      dispatch(updateDroppedItemsFromArray(["", "", "", ""]));
    } else {
      dispatch(updateDroppedItemsFromArray(["", "", ""]));
    }
    dispatch(correctAnswer(false));
    dispatch(updateToastMsg(""));
    dispatch(thunks.setQuestion());
    let popupid = -1;
    if (currentPopup.indexOf(2) >= 0) {
      popupid = 2;
      dispatch(togglePopup(popupid));
    } else if (currentPopup.indexOf(5) >= 0) {
      popupid = 5;
      dispatch(togglePopup(popupid));
    }
    setTimeout(() => {
      dispatch(togglePopup(1));
    }, 60);
  },

  updateDropItems: (item, index) => (dispatch, getState) => {
    const { selectedQuestion } = getState();
    let wavelengthMapData;
    if (selectedQuestion === 1 || selectedQuestion === 2) {
      wavelengthMapData = data.wavelengthData1;
    } else if (selectedQuestion === 3 || selectedQuestion === 4) {
      wavelengthMapData = data.wavelengthData2;
    }
    dispatch(updateDropItems(item, index));
    const { elementName } = wavelengthMapData.filter(
      (e) => e.shortName == item
    )[0];
    const liveText = data.dropLiveText
      .replace("-1-", elementName)
      .replace("-2-", index + 1);
    dispatch(common.ariaLiveText(liveText));
  },
  fetchQuestion: () => {
    return (dispatch, getState) => {
      const { selectedQuestion } = getState();
      let wavelengthMapData;
      if (selectedQuestion === 1 || selectedQuestion === 2) {
        wavelengthMapData = data.wavelengthData1;
        wavelengthMapData.sort(() => Math.random() - 0.5);
      } else if (selectedQuestion === 3 || selectedQuestion === 4) {
        wavelengthMapData = data.wavelengthData2;
        wavelengthMapData.sort(() => Math.random() - 0.5);
      }
    };
  },
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      const _questionsData = questionsData.map((q) => ({ ...q }));
      const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(index, 1)[0] };
      dispatch(setMcqQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
    };
  },
  selectAnswerOption: (id) => (dispatch, getState) => {
    dispatch(selectAnswerOption(id));
    const { resetBtnState } = getState();
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },
  updateAttempt: (val) => {
    return (dispatch, getState) => {
      const { updateAttempt, dropElement, droppedItems } = getState();
      dispatch(updateAttemptData([...updateAttempt, val]));

      let temp = {
        ...dropElement,
        [val]: true,
      };
      dispatch(updateDropElement(temp));
    };
  },

  submitAnswer: (val) => {
    return (dispatch, state) => {
      const {
        droppedItems,
        selectedQuestion,
        selectedRadioQuestion,
        selectAnswerOption,
      } = state();
      if (selectedQuestion <= 4) {
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
            if (selectedQuestion === 1 || selectedQuestion === 2) {
              dispatch(updateDroppedItemsFromArray(["", "", "", ""]));
            } else {
              dispatch(updateDroppedItemsFromArray(["", "", ""]));
            }
          }
          dispatch(toggleToastMessage(true));
          dispatch(updateDroppedItemsFromArray(_droppedItems));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        } else {
          dispatch(updateToastMsg("correct"));
          dispatch(correctAnswer(true));
          dispatch(toggleToastMessage(true));
          EventManager.broadcast("POSITIVE_FEEDBACK");

          setTimeout(() => {
            if (selectedQuestion == 1) {
              dispatch(ariaLiveText(data.liveTextQ1));
            } else if (selectedQuestion == 2) {
              dispatch(ariaLiveText(data.liveTextQ2));
            } else if (selectedQuestion == 3) {
              dispatch(ariaLiveText(data.liveTextQ3));
            } else if (selectedQuestion == 4) {
              dispatch(ariaLiveText(data.liveTextQ4));
            }
            setTimeout(() => {
              dispatch(ariaLiveText(" "));
            }, 200);
          }, 700);
        }
      } else {
        const correctAnswers = selectedRadioQuestion.answer;
        let val = false;
        if (correctAnswers == selectAnswerOption) {
          val = true;
          dispatch(updateToastMsg("correct"));
          dispatch(correctAnswer(true));
          dispatch(toggleToastMessage(true));
          EventManager.broadcast("POSITIVE_FEEDBACK");
        } else {
          dispatch(updateToastMsg("incorrect"));
          dispatch(correctAnswer(false));
          dispatch(toggleToastMessage(true));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }
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
      const { droppedItems, selectedQuestion } = getState();
      dispatch(togglePopup(1));
      if (!droppedItems.length) {
        dispatch(thunks.fetchQuestion());
      }
      dispatch(updateAttemptData([]));
      dispatch(updateResetBtnState(true));
      dispatch(selectQuestion(1));
      if (selectedQuestion === 1 || selectedQuestion === 2) {
        dispatch(updateDroppedItemsFromArray(["", "", "", ""]));
      } else {
        dispatch(updateDroppedItemsFromArray(["", "", ""]));
      }
      dispatch(correctAnswer(false));
      dispatch(updateToastMsg(""));
    };
  },
};
