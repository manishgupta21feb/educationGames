import data from "../data";
import * as actions from "../../app/actions";

export const common = { ...actions };
export const SET_STATIC = "SET_STATIC";
export const SELECT_OPTION = "SELECT_OPTION";
export const ACTIVITY_START = "ACTIVITY_START";
export const RESET_ORGANISM = "RESET_ORGANISM";
export const RESET_QUESTION = "RESET_QUESTION";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const RESET_ORGANISMS = "RESET_ORGANISMS";
export const SELECT_ORGANISM = "SELECT_ORGANISM";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const SELECT_ORGANISMS = "SELECT_ORGANISMS";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const FEEDBACK_NARRATION = "FEEDBACK_NARRATION";
export const SELECT_MCQ_QUESTION = "SELECT_MCQ_QUESTION";

const {
  thunks,
  togglePopup,
  ariaLiveText,
  setResetFocusState,
  toggleToastMessage,
  updateResetBtnState,
} = actions;

export const selectOrganisms = (id) => {
  return {
    type: SELECT_ORGANISMS,
    id,
  };
};

export const resetOrganisms = () => {
  return {
    type: RESET_ORGANISMS,
  };
};
export const selectOrganism = (id) => {
  return {
    type: SELECT_ORGANISM,
    id,
  };
};

export const resetOrganism = () => {
  return {
    type: RESET_ORGANISM,
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

export const thunk = {
  generateNextQuestion: () => {
    return (dispatch, state) => {
      const { selectedOrganisms, showStatic, selectedQuestion } = state();
      if (!showStatic) {
        const question = data.classifyingMatterContent.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.label == selectedOrganisms;
        if (check) {
          if (question.id === 4) {
            dispatch(togglePopup(2));
            dispatch(togglePopup(8));
          } else {
            TincanManager.data.completed = true;
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
      const { selectedOrganisms } = state();
      TincanManager.data.percentage =
        (((selectedOrganisms.length + 1) /
          data.classifyingMatterContent.length) *
          100) /
        2;
      selectedOrganisms.length + 1 == data.classifyingMatterContent.length
        ? (TincanManager.data.completed = true)
        : null;
      TincanManager.saveTincanData();
      dispatch(selectOrganism(id));
      dispatch(selectOrganisms(id));
      const { resetBtnState } = state();
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
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
            }, 350);
          } else {
            TincanManager.data.percentage =
              50 + ((selectedQuestion / data.mcqData.length) * 100) / 2;
            TincanManager.saveTincanData();
            dispatch(setResetFocusState(true));
            dispatch(selectQuestion());
            dispatch(selectOption(""));
          }
        }
      }
    };
  },
  resetSimulation: () => {
    return (dispatch) => {
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      dispatch(setStatic(false));
      dispatch(resetQuestion());
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(setActivityStart(false));
      dispatch(resetOrganism());
      dispatch(resetOrganisms());
      dispatch(selectOption(""));
      dispatch(thunks.onChangeScreen(0));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },
};
