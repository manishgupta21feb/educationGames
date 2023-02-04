import data from "../data";

import { togglePopup, ariaLiveText, toggleToastMessage } from ".";
export const DEMO_ACTION = "DEMO_ACTION";
export const SELECT_ORGANISM = "SELECT_ORGANISM";
export const RESET_ORGANISMS = "RESET_ORGANISMS";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const RESET_QUESTION = "RESET_QUESTION";
export const SET_STATIC = "SET_STATIC";
export const SELECT_OPTION = "SELECT_OPTION";
export const SELECT_MCQ_QUESTION = "SELECT_MCQ_QUESTION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const RESET_FOCUS = "RESET_FOCUS";
export const RESET_BTN_STATE = "RESET_BTN_STATE";
export const ACTIVITY_START = "ACTIVITY_START";
export const FEEDBACK_NARRATION = "FEEDBACK_NARRATION";
export const SET_ANSWERED = "SET_ANSWERED";

export const scaleChange = () => ({ type: DEMO_ACTION });

export const selectOrganism = (id) => {
  return {
    type: SELECT_ORGANISM,
    id,
  };
};

export const resetOrganisms = () => {
  return {
    type: RESET_ORGANISMS,
  };
};

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

export const setStatic = (staticState) => {
  return {
    type: SET_STATIC,
    staticState,
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

export const setResetFocusState = (focus) => {
  return {
    type: RESET_FOCUS,
    focus,
  };
};

export const setActivityStart = (val) => {
  return {
    type: ACTIVITY_START,
    val,
  };
};

export const setFeedbackNarration = (val) => {
  return {
    type: FEEDBACK_NARRATION,
    val,
  };
};

export const setAnswered = (value) => ({ value, type: "SET_ANSWERED" });
export const updateResetBtnState = (val) => ({ val, type: RESET_BTN_STATE });

export const thunk = {
  generateNextQuestion: () => {
    return (dispatch, state) => {
      const {
        selectedOrganisms,
        showStatic,
        selectedQuestion,
        toggleToastMessage,
        audioStatePlay,
      } = state();
      if (!showStatic) {
        const question = data.classifyingMatterContent.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.label == selectedOrganisms;
        if (check) {
          if (question.id === 4) {
            dispatch(togglePopup(2));
            dispatch(togglePopup(8));
            // EventManager.broadcast("AUDIO_STARTCOMPLETION_SCREEN");
          } else {
            dispatch(togglePopup(2));
            dispatch(selectQuestion());
          }
        }
      }
      dispatch(resetOrganisms());
    };
  },

  selectOrganism: (id, selectedState) => {
    return (dispatch, state) => {
      dispatch(selectOrganism(id));
      const { selectedOrganisms, showStatic, selectedQuestion, kitchenItems } =
        state();
      if (!showStatic) {
        const question = data.classifyingMatterContent.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.label == selectedOrganisms;
        if (check) {
          dispatch(togglePopup(2));
        } else {
          dispatch(toggleToastMessage(true));
          dispatch(togglePopup(4));
        }
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, state) => {
      const { selectedOption, showStatic, selectedQuestion } = state();
      if (showStatic) {
        dispatch(toggleToastMessage(true));
        dispatch(answerAttempted(true));
        const question = data.mcqData.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.answer == selectedOption;

        if (check) {
          EventManager.broadcast("POSITIVE_FEEDBACK");
          dispatch(correctAnswer(true));
        } else {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(correctAnswer(false));
        }
      }
    };
  },

  generateNextMCQ: () => {
    return (dispatch, state) => {
      const { selectedOption, showStatic, selectedQuestion } = state();
      if (showStatic) {
        const question = data.mcqData.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.answer == selectedOption;
        if (check) {
          if (selectedQuestion >= 4) {
            dispatch(togglePopup(7));
            TincanManager.data.percentage =
              50 + ((selectedQuestion / data.mcqData.length) * 100) / 2;
            TincanManager.data.completed = true;
            TincanManager.saveTincanData();
            setTimeout(() => {
              EventManager.broadcast("COMPLETION_SCREEN");
            }, 500);
          } else {
            TincanManager.data.percentage =
              50 + ((selectedQuestion / data.mcqData.length) * 100) / 2;
            TincanManager.saveTincanData();
            console.log(TincanManager.data.percentage);
            dispatch(selectQuestion());
            dispatch(selectOption(""));
            dispatch(setResetFocusState(true));
          }
        }
      }
    };
  },

  verifyItem: (id) => {
    return (dispatch, getState) => {
      dispatch(toggleToastMessage(false));
      const { selectedQuestion, resetBtnState } = getState();
      const check = selectedQuestion == id;
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      if (check) {
        dispatch(setAnswered(true));
        dispatch(setResetFocusState(true));
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
      } else {
        // incorrect attempt
        EventManager.broadcast("NEGATIVE_FEEDBACK");
        setTimeout(() => {
          dispatch(toggleToastMessage(true));
        }, 100);
      }
    };
  },

  onContinueClick: () => {
    return (dispatch, getState) => {
      const { selectedQuestion } = getState();
      if (selectedQuestion < data.classifyingMatterContent.length) {
        dispatch(selectQuestion());
        dispatch(setResetFocusState(true));
        TincanManager.data.percentage =
          ((selectedQuestion / data.classifyingMatterContent.length) * 100) / 2;
        TincanManager.saveTincanData();
        console.log(TincanManager.data.percentage);
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
      } else {
        TincanManager.data.percentage =
          ((selectedQuestion / data.classifyingMatterContent.length) * 100) / 2;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();
        console.log(TincanManager.data.percentage);
        dispatch(togglePopup(8));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 500);
      }
      dispatch(setAnswered(false));
    };
  },

  reset: () => {
    return (dispatch, state) => {
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      dispatch(setStatic(false));
      dispatch(resetQuestion());
      dispatch(selectOption(""));
      dispatch(setAnswered(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(setActivityStart(false));
      const { currentPopup } = state();
      if (currentPopup.indexOf(6) >= 0) {
        dispatch(togglePopup(6));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      dispatch(togglePopup(1));
    };
  },
};
