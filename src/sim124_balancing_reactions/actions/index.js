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
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const SET_QUESTION = "SET_QUESTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SET_SELECTED_BUTTON = "SET_SELECTED_BUTTON";
export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";
export const RESET_COUNTERS_VALUE = "RESET_COUNTERS_VALUE";
export const UPDATE_COUNTERS_VALUE = "UPDATE_COUNTERS_VALUE";
export const SUBMIT_BTN_VISIBILITY = "SUBMIT_BTN_VISIBILITY";

export const RESET_COUNTER = "RESET_COUNTER";
export const COUNT_ATTEMPTS = "COUNT_ATTEMPTS";
export const DELETE_ATTEMPTS = "DELETE_ATTEMPTS";

export const COUNTER_VALUES = "COUNTER_VALUES";

export const resetQuestion = () => {
  return {
    type: RESET_QUESTION,
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

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const resetCounterValues = (value) => {
  return {
    type: RESET_COUNTER,
    value,
  };
};
export const setCountAttempts = (value) => {
  return {
    type: COUNT_ATTEMPTS,
    value,
  };
};

export const deleteAttempts = (value) => {
  return {
    type: DELETE_ATTEMPTS,
    value,
  };
};
export const attemptAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const counter = (value) => {
  return {
    type: COUNTER_VALUES,
    value,
  };
};

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});
export const setSubmitBtnVisibility = (value) => {
  return {
    type: SUBMIT_BTN_VISIBILITY,
    value,
  };
};
export const updateCountersValue = (payload) => ({
  payload,
  type: UPDATE_COUNTERS_VALUE,
});

export const resetCountersValue = () => ({
  type: RESET_COUNTERS_VALUE,
});

export const thunks = {
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();

      const _questionsData = questionsData.map((q) => ({ ...q }));

      const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(index, 1)[0] };

      dispatch(setQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      let { questionCount: count } = getState();
      if (count < data.equations.length) {
        dispatch(questionCount(count + 1));
        dispatch(setResetFocusState(true));
        EventManager.broadcast("STOP_ALL");
      } else {
        dispatch(toggleToastMessage(false));
        // dispatch(updateQuestionsData(data.nuclearData.map((n) => ({ ...n }))));
        dispatch(togglePopup(7));
        EventManager.broadcast("COMPLETION_SCREEN");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
      dispatch(thunks.setQuestion());
      dispatch(attemptAnswer(false));
      dispatch(correctAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(toggleToastMessage(false));
      // dispatch(answerSubmitted(false));
    };
  },

  submitAnswer: () => (dispatch, getState) => {
    const { selectedQuestion, counters } = getState();
    let check = false;
    // get the total number of counters present on screen.
    const correctSequenceLength = Object.keys(
      selectedQuestion.answers[0]
    ).length;
    // iterate over every possible answer combinations
    for (let answer of selectedQuestion.answers) {
      // on every iteration initialize the `count` variable with 0 to reset the check counter for current combinations.
      let count = 0;
      for (let counter in counters) {
        if (counters[counter] && counters[counter] == answer[counter]) {
          // if the current value of this specific counter is matching with the count required for associated molecule.
          // if all counters are correct, then the value of `count` would be equal to the number of counters on screen.
          count++;
        }
      }
      // check if one of the combination is matched.
      if (count == correctSequenceLength) {
        check = true;
        break;
      }
    }

    setTimeout(() => {
      EventManager.broadcast(check ? "POSITIVE_FEEDBACK" : "NEGATIVE_FEEDBACK");
    }, 200);
    dispatch(correctAnswer(check));
    dispatch(attemptAnswer(true));
    dispatch(submitButtonPressed(true));
    dispatch(toggleToastMessage(true));
  },

  reset: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      // dispatch(updateQuestionsData([..._questionsData]));
      dispatch(updateQuestionsData(data.equations.map((n) => ({ ...n }))));
      dispatch(thunks.setQuestion());
      // dispatch(updateQuestionsData([..._questionsData]));
      dispatch(questionCount(1));
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(attemptAnswer(false));
      dispatch(submitButtonPressed(false));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 200);
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      TincanManager.resetTincanData();
    };
  },

  updateCountersValue: (value, id) => (dispatch, getState) => {
    const counters = { ...getState().counters };
    counters[id] = value;
    dispatch(updateCountersValue(counters));
  },
};
