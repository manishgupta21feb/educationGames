import * as actions from "../../app/actions";
import data from "../data";

export const SELECT_OPTION = "SELECT_OPTION";
export const SUBMIT_BTN_VISIBILITY = "SUBMIT_BTN_VISIBILITY";
export const ANSWER = "ANSWER";
export const QUESTION_NUMBER = "QUESTION_NUMBER";
export const VIDEO_ENDED = "VIDEO_ENDED";
export const ON_VIDEO_ENDED = "ON_VIDEO_ENDED";

export const common = { ...actions };

export const setSelectedOption = (value) => {
  return {
    type: SELECT_OPTION,
    value,
  };
};

export const setSubmitBtnVisibility = (value) => {
  return {
    type: SUBMIT_BTN_VISIBILITY,
    value,
  };
};

export const setAnswer = (value) => {
  return {
    type: ANSWER,
    value,
  };
};

export const setQuestionNumber = (value) => {
  return {
    type: QUESTION_NUMBER,
    value,
  };
};

export const setVideoStart = (value) => {
  return {
    type: VIDEO_ENDED,
    value,
  };
};

export const onVideoEnded = (endState) => ({
  type: ON_VIDEO_ENDED,
  endState,
});
export const thunk = {
  onSubmitAnswer: () => {
    return (dispatch, getState) => {
      const { getSelectedOption, getQuestionNumber } = getState();

      const answer = data.questions[getQuestionNumber].answer;
      const submitedAns = getSelectedOption;

      if (answer === submitedAns) {
        dispatch(setAnswer(true));
        dispatch(setSubmitBtnVisibility(false));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else {
        dispatch(setAnswer(false));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }

      dispatch(common.toggleToastMessage(true));
    };
  },

  onContinue: () => {
    return (dispatch, getState) => {
      const { getQuestionNumber, videoEnded } = getState();
      if (videoEnded) {
        dispatch(onVideoEnded(false));
      }
      dispatch(setAnswer(false));
      dispatch(setVideoStart(false));
      EventManager.broadcast("SECONDARY_CLICK");

      if (getQuestionNumber == 2) {
        dispatch(common.togglePopup(4));
        EventManager.broadcast("COMPLETION_SCREEN");

        TincanManager.data.percentage = 50;
        TincanManager.saveTincanData();
      } else if (getQuestionNumber == 6) {
        dispatch(common.togglePopup(5));
        EventManager.broadcast("COMPLETION_SCREEN");

        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();
      } else {
        dispatch(setQuestionNumber(getQuestionNumber + 1));
      }

      setTimeout(() => {
        EventManager.broadcast("STOP_ALL");
      }, 300);
    };
  },

  onTransitionBtn: () => {
    return (dispatch, getState) => {
      const { getQuestionNumber } = getState();
      dispatch(setQuestionNumber(getQuestionNumber + 1));
    };
  },

  videoLiveText: () => {
    return (dispatch, getState) => {
      const { getQuestionNumber } = getState();
      dispatch(
        common.thunks.ariaLiveAssertive(
          data.questions[getQuestionNumber].liveText
        )
      );
    };
  },

  onReset: () => {
    return (dispatch) => {
      dispatch(setSelectedOption(""));
      dispatch(setSubmitBtnVisibility(false));
      dispatch(setAnswer(false));
      dispatch(setQuestionNumber(0));
      dispatch(setVideoStart(false));
      dispatch(onVideoEnded(false));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.togglePopup(1));
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 800);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
};
