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
export const UPDATE_SCREEN = "UPDATE_SCREEN";

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

export const updateScreen = (value) => {
  return {
    type: UPDATE_SCREEN,
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

  onScreenOneCompletion: () => {
    return (dispatch) => {
      dispatch(currentWindow("secondScreen"));
      dispatch(updateScreen("second"));
      dispatch(setQuestionNumber(0));
    };
  },

  onSecondScreenContinue: () => {
    return (dispatch) => {
      dispatch(currentWindow("locations"));
    };
  },

  setSceneData: (data) => {
    return (dispatch, getState) => {
      const { updateTabsData, getQuestionNumber } = getState();
      const isLaunchCompleted = Object.values(updateTabsData).every(
        (element) => element.visited
      );
      if (isLaunchCompleted) {
        EventManager.broadcast("STOP_ALL");
        dispatch(common.togglePopup(3));
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        dispatch(setQuestionNumber(getQuestionNumber + 1));
        dispatch(currentWindow(data));
        dispatch(questionState(false));
        setTimeout(() => {
          EventManager.broadcast("STOP_ALL");
        }, 100);
      }
      dispatch(setAttempts(0));
      dispatch(common.toggleToastMessage(false));
      dispatch(currentOptionState(""));
      dispatch(setSelectedOption(""));

      dispatch(setAnswer(false));
    };
  },

  onSubmitAnswer: () => {
    return (dispatch, getState) => {
      const { getSelectedOption, getQuestionNumber, screen } = getState();
      let answer = "";
      if (screen === "first") {
        answer = {
          ...data[getState().currentLocation],
        }.answer;
      } else {
        answer = data.questions[getQuestionNumber].answer;
      }

      const submitedAns = getSelectedOption;
      if (answer === submitedAns) {
        dispatch(setAnswer(true));

        if (screen !== "first") {
          setTimeout(() => {
            dispatch(common.toggleToastMessage(true));
          }, 1000);
          dispatch(common.togglePopup(6));
        } else {
          dispatch(common.toggleToastMessage(true));
        }
        dispatch(setSubmitBtnVisibility(false));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else {
        dispatch(common.toggleToastMessage(true));
        dispatch(setAnswer(false));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    };
  },

  onClickNext: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(6));
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
        dispatch(common.togglePopup(4)); ///changed
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
      dispatch(updateScreen("first"));
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
    };
  },
};
