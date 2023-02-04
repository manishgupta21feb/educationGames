import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const HOT_SPOTS = "HOT_SPOTS";
export const CURRENT_WINDOW = "CURRENT_WINDOW";
export const QUESTION_STATE = "QUESTION_STATE";
export const CURRENT_OPTION = "CURRENT_OPTION";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const CURRENT_LOCATION = "CURRENT_LOCATION";
export const SELECT_OPTION = "SELECT_OPTION";
export const QUESTION_NUMBER = "QUESTION_NUMBER";
export const SUBMIT_BTN_VISIBILITY = "SUBMIT_BTN_VISIBILITY";
export const ANSWER = "ANSWER";
export const ATTEMPTS = "ATTEMPTS";

import { cloneDeep } from "lodash";
import data from "../data";

export const common = { ...actions };

export const updateTabsData = (data) => {
  return {
    type: HOT_SPOTS,
    _data: data,
  };
};

export const currentWindow = (data) => {
  return {
    type: CURRENT_WINDOW,
    location: data,
  };
};
export const currentLocation = (data) => {
  return {
    type: CURRENT_LOCATION,
    location: data,
  };
};

export const questionState = (data) => {
  return {
    type: QUESTION_STATE,
    qState: data,
  };
};

export const currentOptionState = (data) => {
  return {
    type: CURRENT_OPTION,
    selection: data,
  };
};

export const answerSubmitted = (data) => {
  return {
    type: ANSWER_SUBMITTED,
    selection: data,
  };
};
export const setSelectedOption = (value) => {
  return {
    type: SELECT_OPTION,
    value,
  };
};

export const setQuestionNumber = (value) => {
  return {
    type: QUESTION_NUMBER,
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

export const setAttempts = (value) => {
  return {
    type: ATTEMPTS,
    value,
  };
};

export const thunk = {
  launchScreenUpdate: (currentWin, currentLoc) => {
    return (dispatch) => {
      dispatch(currentWindow(currentWin));
      dispatch(currentLocation(currentLoc));
    };
  },

  setSceneData: (data) => {
    return (dispatch, getState) => {
      const { updateTabsData } = getState();
      const isLaunchCompleted = Object.values(updateTabsData).every(
        (element) => element.visited
      );
      if (isLaunchCompleted) {
        EventManager.broadcast("STOP_ALL");
        dispatch(common.togglePopup(3));
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        dispatch(currentWindow(data));
        dispatch(questionState(false));
        setTimeout(() => {
          EventManager.broadcast("STOP_ALL");
        }, 100);
      }
      dispatch(setAttempts(0));
      dispatch(common.toggleToastMessage(false));
      dispatch(currentOptionState(""));
      dispatch(setAnswer(false));
    };
  },

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

  onSubmitLocationsAnswer: () => {
    return (dispatch, getState) => {
      const { currentOptionState, currentLocation } = getState();
      const rightAnswer = data[currentLocation].correctAnswer;
      if (currentOptionState == rightAnswer) {
        dispatch(setAnswer(true));
      } else {
        dispatch(setAnswer(false));
      }
      setTimeout(() => {
        dispatch(common.toggleToastMessage(true));
      }, 200);
      dispatch(common.toggleToastMessage(false));
    };
  },
  onClickNext: () => {
    return (dispatch, getState) => {
      const { getQuestionNumber } = getState();
      const _totalQuestion = data.questions.length;
      if (getQuestionNumber < _totalQuestion - 1) {
        dispatch(setQuestionNumber(getQuestionNumber + 1));
        EventManager.broadcast("SECONDARY_CLICK");
        setTimeout(() => {
          EventManager.broadcast("STOP_ALL");
        }, 100);
      } else {
        EventManager.broadcast("STOP_ALL");

        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(common.togglePopup(4));

        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
      dispatch(setAnswer(false));
      dispatch(setSelectedOption(""));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.setResetFocusState(true));
    };
  },

  resetActivity: () => {
    return (dispatch) => {
      dispatch(updateTabsData(cloneDeep(data.mainScreen.hotSpots)));
      dispatch(currentWindow("launchScreen"));
      dispatch(currentLocation(""));
      dispatch(questionState(false));
      dispatch(currentOptionState(""));
      dispatch(answerSubmitted(""));
      dispatch(setSelectedOption(""));
      dispatch(setQuestionNumber(0));
      dispatch(setSubmitBtnVisibility(false));
      dispatch(setAnswer(false));
      dispatch(setAttempts(0));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.togglePopup(1));

      TincanManager.data.percentage = 0;
      TincanManager.data.completed = false;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
};
