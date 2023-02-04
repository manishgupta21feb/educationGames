import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

// console.log(actions.togglePopup);

const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const common = { ...actions };

export const SET_STATIC = "SET_STATIC";
export const SELECT_OPTION = "SELECT_OPTION";
export const RESET_QUESTION = "RESET_QUESTION";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const ACTIVITY_START = "ACTIVITY_START";
export const SHOW_MCQ_TOGGLE = "SHOW_MCQ_TOGGLE";
export const SELECT_ORGANISM = "SELECT_ORGANISM";
export const RESET_ORGANISMS = "RESET_ORGANISMS";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const FEEDBACK_NARRATION = "FEEDBACK_NARRATION";
export const SELECT_MCQ_QUESTION = "SELECT_MCQ_QUESTION";
export const SET_RANDOMIZED_QUESTIONS = "SET_RANDOMIZED_QUESTIONS";
export const TOGGLE_SHOW_MCQ_COMMON_TEXT = "TOGGLE_SHOW_MCQ_COMMON_TEXT";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";

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

export const showMCQToggle = (show) => ({
  show,
  type: SHOW_MCQ_TOGGLE,
});

export const toggleShowMCQCommonText = (show) => ({
  show,
  type: TOGGLE_SHOW_MCQ_COMMON_TEXT,
});

export const randomizeQuestions = () => ({
  type: SET_RANDOMIZED_QUESTIONS,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const thunks = {
  submitAnswer: () => {
    return (dispatch, state) => {
      const {
        selectedOption,
        questions,
        selectedQuestion,
        questionCount: count,
      } = state();
      dispatch(toggleToastMessage(true));
      dispatch(answerAttempted(true));
      const question = questions.filter((e) => e.id == selectedQuestion)[0];
      const check = question.answer == selectedOption;
      if (check) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        TincanManager.data.percentage = parseInt(
          (count / data.mcqData.length) * 100
        );
        TincanManager.saveTincanData();
        dispatch(correctAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(false));
      }
    };
  },

  generateNextMCQ: () => {
    return (dispatch, state) => {
      let { questionCount: count } = state();
      const { selectedOption, questions, selectedQuestion } = state();
      const question = questions.filter((e) => e.id == selectedQuestion)[0];
      const check = question.answer == selectedOption;
      if (check) {
        if (selectedQuestion == 8) {
          dispatch(questionCount(count + 1));
          dispatch(togglePopup(8));
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 61;
          TincanManager.saveTincanData();
          EventManager.broadcast("COMPLETION_SCREEN");
        } else if (selectedQuestion == 14) {
          dispatch(questionCount(count + 1));
          dispatch(togglePopup(7));
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        } else {
          dispatch(questionCount(count + 1));
          dispatch(selectQuestion());
          dispatch(selectOption(""));
          dispatch(setResetFocusState(true));
          EventManager.broadcast("SECONDARY_CLICK");
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }
      }
    };
  },

  nonMCQQuestion: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, questionCount: count } = getState();
      if (selectedQuestion == 13) {
        dispatch(questionCount(count + 1));
        dispatch(togglePopup(9));
        EventManager.broadcast("COMPLETION_SCREEN");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 92;
        TincanManager.saveTincanData();
      } else {
        dispatch(questionCount(count + 1));
        dispatch(selectQuestion());
        dispatch(setResetFocusState(true));
        EventManager.broadcast("SECONDARY_CLICK");
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }
    };
  },

  toggleAudioBtn: () => {
    return (dispatch, state) => {
      const { audioStatePlay } = state();
      if (!audioStatePlay) {
        dispatch(setAudioStatePlay());
      }
    };
  },

  transitionPopup1: () => {
    return (dispatch) => {
      dispatch(togglePopup(8));
      dispatch(selectQuestion());
      dispatch(selectOption(""));
      dispatch(showMCQToggle(false));
      dispatch(setResetFocusState(false));
      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    };
  },

  transitionPopup2: () => {
    return (dispatch) => {
      dispatch(togglePopup(9));
      dispatch(selectQuestion());
      dispatch(selectOption(""));
      dispatch(showMCQToggle(true));
      dispatch(setResetFocusState(true));
      dispatch(toggleShowMCQCommonText(false));
      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    };
  },

  selectOption: (option) => {
    return (dispatch, getState) => {
      dispatch(selectOption(option));
      if (getState().resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },

  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(randomizeQuestions());
      dispatch(questionCount(1));
      dispatch(resetQuestion());
      dispatch(selectOption(""));
      dispatch(showMCQToggle(true));
      dispatch(correctAnswer(false));
      dispatch(answerAttempted(false));
      dispatch(updateResetBtnState(true));
      dispatch(toggleShowMCQCommonText(true));
      const { currentPopup } = getState();
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      } else if (currentPopup.indexOf(6) >= 0) {
        dispatch(togglePopup(6));
      }
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);
      TincanManager.resetTincanData();
    };
  },
};
