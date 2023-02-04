import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  updateResetBtnState,
  setResetFocusState,
} = actions;
export const common = { ...actions };

export const SELECT_QUESTION = "SELECT_QUESTION";
export const RESET_QUESTION = "RESET_QUESTION";
export const SELECT_OPTION = "SELECT_OPTION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SET_ANSWERED = "SET_ANSWERED";
export const SET_HIDE_BUTTONS = "SET_HIDE_BUTTONS";
export const SET_SELECTED_BUTTON = "SET_SELECTED_BUTTON";
export const COUNT_ATTEMPTS = "COUNT_ATTEMPTS";

export const selectQuestion = () => {
  return {
    type: SELECT_QUESTION,
  };
};

export const resetQuestion = () => {
  return {
    type: RESET_QUESTION,
  };
};

export const selectOption = (option) => {
  return {
    type: SELECT_OPTION,
    option,
  };
};

export const selectMcqQuestion = () => {
  return {
    type: SELECT_MCQ_QUESTION,
  };
};

export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};

export const correctAnswer = (correct) => {
  return {
    type: CORRECT_ANSWER,
    correct,
  };
};

export const setAnswered = (value) => ({ value, type: "SET_ANSWERED" });

export const setHideButtons = (value) => {
  return {
    value,
    type: SET_HIDE_BUTTONS,
  };
};

export const setSelectedButton = (value) => {
  return {
    value,
    type: SET_SELECTED_BUTTON,
  };
};

export const countAttempts = (value) => {
  return {
    value,
    type: COUNT_ATTEMPTS,
  };
};

export const thunks = {
  onDoorAnimationEnd: () => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        attemptedCount: count,
        currentPopup,
      } = getState();
      const questionNumber = selectedQuestion + 1;
      if (questionNumber < 4) {
        dispatch(selectQuestion());
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        dispatch(setAnswered(false));
        dispatch(countAttempts(count + 1));
      } else {
        setTimeout(() => {
          if (currentPopup.indexOf(6) >= 0) {
            dispatch(togglePopup(6));
          }
          dispatch(togglePopup(7));
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      }
    };
  },

  verifyItem: (id) => {
    return (dispatch, getState) => {
      dispatch(toggleToastMessage(false));
      const {
        selectedQuestion,
        resetBtnState,
        attemptedCount: count,
      } = getState();
      const check =
        data.classifyingMatterContent[selectedQuestion].answerKey == id;
      const { liveText } = data.classifyingMatterContent[selectedQuestion];

      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      if (check) {
        dispatch(correctAnswer(true));
        dispatch(toggleToastMessage(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
        if (liveText) {
          dispatch(ariaLiveText(liveText));
          setTimeout(() => {
            dispatch(ariaLiveText(" "));
          }, 300);
        }
        dispatch(setAnswered(true));
        if (count < data.classifyingMatterContent.length) {
          TincanManager.data.percentage = parseInt(
            (count / data.classifyingMatterContent.length) * 100
          );
          TincanManager.saveTincanData();
        } else {
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }
      } else {
        dispatch(correctAnswer(false));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
        setTimeout(() => {
          dispatch(toggleToastMessage(true));
        }, 100);
      }
    };
  },

  reset: () => {
    return (dispatch, state) => {
      dispatch(resetQuestion());
      dispatch(selectOption(""));
      dispatch(setAnswered(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(setHideButtons(false));
      dispatch(setSelectedButton(""));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      const { currentPopup } = state();
      if (currentPopup.indexOf(6) >= 0) {
        dispatch(togglePopup(6));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      dispatch(togglePopup(1));
      dispatch(countAttempts(1));
      TincanManager.resetTincanData();
    };
  },
};
