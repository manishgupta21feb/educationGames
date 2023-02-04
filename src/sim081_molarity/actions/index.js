import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import data from "../data";

export const ACTIVITY_START = "ACTIVITY_START";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const CORRECT_ATTEMPT = "CORRECT_ATTEMPT";
export const SHOW_TOAST_MESSAGE = "SHOW_TOAST_MESSAGE";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const STEPPER_VALUE = "STEPPER_VALUE";
export const VIDEO_PLAY_STATE = "VIDEO_PLAY_STATE";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const RESET_COUNTER = "RESET_COUNTER";
export const SET_RESET_BUTTON_STATE = "SET_RESET_BUTTON_STATE";
export const SET_PARTIALLY_CORRECT = "SET_PARTIALLY_CORRECT";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const IS_VIDEO_PAUSE = "IS_VIDEO_PAUSE";
export const RESET_QUESTIONS_DATA = "RESET_QUESTIONS_DATA";
export const common = { ...actions };
export const IS_VIDEO_END = "IS_VIDEO_END";

export const setIsVideoEnd = (val) => {
  return {
    type: IS_VIDEO_END,
    val,
  };
};

export const resetQuestionData = () => {
  return {
    type: RESET_QUESTIONS_DATA,
  };
};
export const setActivityStart = (val) => {
  return {
    type: ACTIVITY_START,
    val,
  };
};

export const selectQuestion = (item) => {
  return {
    item,
    type: SELECT_QUESTION,
  };
};

export const correctAttempt = (correct) => ({
  type: CORRECT_ATTEMPT,
  correct,
});

export const showToastMessage = (show) => ({
  type: SHOW_TOAST_MESSAGE,
  show,
});

export const submitAnswer = (val) => ({
  val,
  type: SELECT_CORRECT_ANSWER,
});

export const answerSubmitted = (attempted) => ({
  type: ANSWER_SUBMITTED,
  attempted,
});

export const setStepperValue = (attempted) => ({
  type: STEPPER_VALUE,
  attempted,
});

export const setVideoPlayState = (item) => ({
  type: VIDEO_PLAY_STATE,
  item,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const resetCounterValues = (value) => {
  return {
    type: RESET_COUNTER,
    value,
  };
};

export const setPartiallyCorrect = (correct) => ({
  correct,
  type: SET_PARTIALLY_CORRECT,
});

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const getIsVideoPause = (params) => ({
  type: IS_VIDEO_PAUSE,
  params,
});

export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const thunk = {
  onNextButton: () => {
    return (dispatch, getState) => {
      let { questionCount: count, resetBtnState } = getState();
      dispatch(resetCounterValues(false));
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      if (count < data.molerityData.length) {
        dispatch(questionCount(count + 1));
        TincanManager.data.percentage = parseInt(
          (count / data.molerityData.length) * 100
        );
        TincanManager.saveTincanData();

        dispatch(common.toggleToastMessage(false));
        setTimeout(() => {
          dispatch(common.setResetFocusState(true));
        });
        setTimeout(() => {
          EventManager.broadcast("STOP_ALL");
        }, 100);
      } else {
        dispatch(getIsVideoPause(false));
        dispatch(common.togglePopup(7));
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(common.toggleToastMessage(false));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
      }
    };
  },

  selectQuestion: () => {
    return (dispatch, getState) => {
      dispatch(updateQuestionsData(helper.shuffleArray(data.molerityData)));
    };
  },

  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(getIsVideoPause(false));
      dispatch(common.togglePopup(1));
      dispatch(questionCount(1));
      dispatch(setStepperValue(0));
      dispatch(resetCounterValues(true));
      dispatch(thunk.selectQuestion());
      dispatch(common.updateResetBtnState(true));
      dispatch(resetQuestionData());
      dispatch(setIsVideoEnd(false));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },

  setStepperValue: (value) => (dispatch, getState) => {
    const { stepperValue, resetBtnState } = getState();
    if (value !== stepperValue && resetBtnState) {
      dispatch(common.updateResetBtnState(false));
    }
    dispatch(setStepperValue(value));
  },
};
