import data from "../data";
import { ariaLiveText, togglePopup, toggleToastMessage } from ".";
import EventManager from "../../app/events/manager";

export const ARROW_DIRECTION = "ARROW_DIRECTION";
export const SUCCESS_COUNT = "SUCCESS_COUNT";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";
export const SET_BUTTON = "SET_BUTTON";
export const SELECT_BUTTON_OPTION = "SELECT_BUTTON_OPTION";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const SHOW_TOAST_MESSAGE = "SHOW_TOAST_MESSAGE";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const CORRECT_ATTEMPT = "CORRECT_ATTEMPT";
export const SET_FORCE = "SET_FORCE";
export const PLAY_ANIMATION = "PLAY_ANIMATION";
export const APPLY_FORCE = "APPLY_FORCE";
export const RESET_APPLIED_FORCE = "RESET_APPLIED_FORCE";
export const COUNT_CORRECT_ATTEMPT = "COUNT_CORRECT_ATTEMPT";
export const RESET_CORRECT_COUNT = "RESET_CORRECT_COUNT";
export const RESET_BUTTON_STATE = "RESET_BUTTON_STATE";
export const SET_FOCUS_TO_RESET = "SET_FOCUS_TO_RESET";
export const SET_LAST_ATTEMPT_WAS_CORRECT = "SET_LAST_ATTEMPT_WAS_CORRECT";

export const scaleChange = () => ({ type: DEMO_ACTION });

export const selectButtonOption = (id) => ({ id, type: SELECT_BUTTON_OPTION });

export const setArrowDirection = (val) => ({
  val,
  type: ARROW_DIRECTION,
});

export const successCount = (count) => ({
  type: SUCCESS_COUNT,
  count,
});

export const submitAnswer = (val) => ({
  val,
  type: SELECT_CORRECT_ANSWER,
});

export const setButton = (question) => ({
  type: SET_BUTTON,
  question,
});

export const selectQuestion = (item) => {
  return {
    item,
    type: SELECT_QUESTION,
  };
};

export const showToastMessage = (show) => ({
  type: SHOW_TOAST_MESSAGE,
  show,
});

export const answerSubmitted = (attempted) => ({
  type: ANSWER_SUBMITTED,
  attempted,
});

export const correctAttempt = (correct) => ({
  type: CORRECT_ATTEMPT,
  correct,
});

export const updateForce = (val) => ({ val, type: SET_FORCE });

export const appliedForce = (val) => ({ val, type: SET_FORCEA });

export const playAnimation = (animation) => ({
  animation,
  type: PLAY_ANIMATION,
});

export const applyForce = (force) => ({
  force,
  type: APPLY_FORCE,
});

export const resetAppliedForce = () => ({ type: RESET_APPLIED_FORCE });

export const countCorrectAttempt = () => ({ type: COUNT_CORRECT_ATTEMPT });

export const resetCorrectCount = () => ({ type: RESET_CORRECT_COUNT });

export const resetButtonState = (btn) => ({ btn, type: RESET_BUTTON_STATE });

export const setResetFocusState = (focus) => ({
  focus,
  type: SET_FOCUS_TO_RESET,
});

export const setLastAttemptWasCorrect = (correct) => ({
  correct,
  type: SET_LAST_ATTEMPT_WAS_CORRECT,
});

const timeouts = {
  enableInteractions: null,
  animationComplete1: null,
  animationComplete2: null,
};

export const thunk = {
  setButton: () => {
    return (dispatch, getState) => {};
  },

  onActivityStart: () => {
    return (dispatch) => {
      dispatch(togglePopup(1));
      dispatch(thunk.createQuestion());
    };
  },

  createQuestion: () => {
    return (dispatch) => {
      const forcesData = data.forcesData;
      const index = Math.floor(Math.random() * forcesData.length);
      const item = forcesData[index];
      dispatch(selectQuestion({ ...item }));
    };
  },

  submitAnswer: (id) => {
    return (dispatch, getState) => {
      const { selectedQuestion, successCount: count } = getState();
      const correctAnswer = selectedQuestion.id;
      let val = false;
      if (correctAnswer == id) {
        val = true;
      }

      dispatch(submitAnswer(val));
      dispatch(correctAttempt(val));
      dispatch(answerSubmitted(true));
      dispatch(showToastMessage(true));
      if (val) {
        dispatch(thunk.createQuestion());
      }
      setTimeout(() => {
        dispatch(setArrowDirection(""));
      }, 2000);
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateForce(2));
      dispatch(resetCorrectCount());
      dispatch(resetAppliedForce());
      dispatch(correctAttempt(false));
      dispatch(thunk.createQuestion());
      dispatch(resetButtonState(true));
      dispatch(toggleToastMessage(false));
      dispatch(setLastAttemptWasCorrect(false));
      const { currentPopup } = getState();
      if (currentPopup.indexOf(2) >= 0) {
        dispatch(togglePopup(2));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      dispatch(togglePopup(1));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 1000);
      clearTimeout(timeouts.finalBoxTimeout);
      dispatch(successCount(1));
      TincanManager.resetTincanData();
    };
  },

  updateForce: (force) => {
    return (dispatch, getState) => {
      if (force !== getState().force && force !== 2) {
        EventManager.broadcast("PRIMARY_CLICK");
        dispatch(updateForce(force));
        if (force !== 2) {
          const { resetBtnState, selectedQuestion } = getState();
          if (resetBtnState) {
            dispatch(resetButtonState(false));
          }
          const forceMap = data.forceMap;
          const value = forceMap[force];
          if (selectedQuestion.id == value) {
            dispatch(applyForce(value));
            dispatch(setLastAttemptWasCorrect(true));
          } else {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
            dispatch(toggleToastMessage(true));
            dispatch(correctAttempt(false));
            clearTimeout(timeouts.animationComplete1);
            clearTimeout(timeouts.animationComplete2);
            timeouts.animationComplete1 = setTimeout(() => {
              dispatch(thunk.enableInteractions());
            }, 4000);
          }
        }
      }
    };
  },
  animationEnd: () => {
    return (dispatch, getState) => {
      const { correctCount } = getState();
      dispatch(countCorrectAttempt(true));
      EventManager.broadcast("POSITIVE_FEEDBACK");
      const { currentPopup } = getState();
      if (!currentPopup.length) {
        dispatch(toggleToastMessage(true));
        dispatch(correctAttempt(true));
        TincanManager.data.percentage = parseInt(
          (correctCount / data.forcesDataQuestion) * 100
        );
        TincanManager.saveTincanData();
      }
      clearTimeout(timeouts.animationComplete1);
      clearTimeout(timeouts.animationComplete2);
      timeouts.animationComplete2 = setTimeout(() => {
        const resetActive = getState().currentPopup;
        if (resetActive.indexOf(2) == -1 && resetActive.indexOf(1) == -1) {
          dispatch(thunk.enableInteractions());
        }
      }, 4000);
    };
  },

  enableInteractions: () => {
    return (dispatch, getState) => {
      const { correctCount, lastAttemptWasCorrect, currentPopup } = getState();
      if (correctCount > 0 && correctCount == 6) {
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(togglePopup(4));
      } else {
        dispatch(toggleToastMessage(false));
        dispatch(setResetFocusState(true));
        dispatch(updateForce(2));
        dispatch(resetAppliedForce());
        dispatch(correctAttempt(false));
        if (lastAttemptWasCorrect) {
          dispatch(thunk.createQuestion());
        }
        dispatch(setLastAttemptWasCorrect(false));
      }
    };
  },
  allCompleted: () => {
    return (dispatch, getState) => {
      const { correctCount } = getState();
      if (correctCount > 0 && correctCount == 6) {
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(togglePopup(4));
      }
    };
  },
};
