import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

import data from "../data";
export const common = { ...actions };
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const IS_ACCESSIBLE = "IS_ACCESSIBLE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SET_OPTIONS = "SET_OPTIONS";
export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";
export const ALL_QUESTION_SET = "ALL_QUESTION_SET";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const SELECTED_OPTIONS = "SELECTED_OPTIONS";
export const RESET_OPTIONS = "RESET_OPTIONS";
export const IS_BUTTON_CLICK = "IS_BUTTON_CLICK";
export const GET_NEXT_QUESTION = "GET_NEXT_QUESTION";
export const IS_RESET_BUTTON_DISABLE = "IS_RESET_BUTTON_DISABLE";
export const GET_LABELS = "GET_LABELS";
export const UPDATE_HEADING = "UPDATE_HEADING";

export const setLabels = (live, aria) => {
  return {
    type: GET_LABELS,
    live,
    aria,
  };
};

export const isResetButtonDisable = (data) => {
  return {
    type: IS_RESET_BUTTON_DISABLE,
    data,
  };
};

export const getNextQuestion = (data) => {
  return {
    type: GET_NEXT_QUESTION,
    data,
  };
};

export const resetOptions = (data) => ({
  type: RESET_OPTIONS,
  data,
});
export const getOptionsValue = (data) => ({
  type: SELECTED_OPTIONS,
  data,
});

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});
export const updateHeading = (val) => ({
  type: UPDATE_HEADING,
  val,
});
export const setOptions = () => ({
  type: SET_OPTIONS,
});

export const setActivityCompleted = (completed) => ({
  completed,
  type: SET_ACTIVITY_COMPLETED,
});

export const updateQuestion = (items) => ({
  items,
  type: UPDATE_QUESTION,
});

export const thunks = {
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(isResetButtonDisable(true));
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(resetOptions());
      dispatch(updateResetBtnState(true));
      dispatch(setActivityCompleted(false));
      dispatch(getNextQuestion(false));
      dispatch(setOptions());
      dispatch(updateHeading(1));
      dispatch(setLabels("", ""));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },
  submitOption: (item, live, aria) => (dispatch, getState) => {
    let { selectedOptions } = getState();
    dispatch(updateToastMsg(""));
    dispatch(isResetButtonDisable(false));
    dispatch(toggleToastMessage(false));
    let nextQuestion = data.questionSet.filter((item) => {
      if (!selectedOptions.includes(item.answerId)) {
        return item;
      }
    });

    let { answerId, leftAlt, leftLive } = nextQuestion.slice(0, 1)[0];

    if (answerId == item) {
      dispatch(updateToastMsg("correct"));
      setTimeout(() => {}, 100);
      dispatch(getOptionsValue(item));
      dispatch(getNextQuestion(true));
      setTimeout(() => {
        dispatch(common.ariaLiveText(leftLive));
      }, 500);
      dispatch(setLabels(leftLive, leftAlt));
      EventManager.broadcast("POSITIVE_FEEDBACK");
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 800);
    } else {
      dispatch(updateToastMsg("incorrect"));
      EventManager.broadcast("NEGATIVE_FEEDBACK"); //wrong toast msg
    }
    setTimeout(() => {
      dispatch(toggleToastMessage(true));
    }, 50);
  },
  nextQuestion: () => (dispatch, getState) => {
    let { selectedOptions, updateHeadingValue } = getState();
    dispatch(updateToastMsg(""));
    dispatch(toggleToastMessage(false));
    if (selectedOptions.length == 6) {
      TincanManager.data.percentage = 100;
      TincanManager.data.completed = true;
      TincanManager.saveTincanData();

      // reset code
      dispatch(common.togglePopup(3));
      EventManager.broadcast("COMPLETION_SCREEN");
    } else {
      // tin can code
      TincanManager.data.percentage = (selectedOptions.length / 6) * 100;
      TincanManager.saveTincanData();
      TincanManager.data.completed = false;
      dispatch(common.setResetFocusState(true));
      dispatch(getNextQuestion(false));
      dispatch(updateHeading(updateHeadingValue + 1));
      EventManager.broadcast("PRIMARY_CLICK");
    }

    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 150);
  },
};
