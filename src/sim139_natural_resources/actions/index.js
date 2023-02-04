import * as actions from "../../app/actions";
import data from "../data";
export const SELECT_RESOURCE = "SELECT_RESOURCE";
export const ADD_VISITED_RESOURCE = "ADD_VISITED_RESOURCE";
export const SELECT_RESOURCE_TYPE = "SELECT_RESOURCE_TYPE";
export const RESET_VISITED_RESOURCES = "RESET_VISITED_RESOURCES";
export const SET_ANSWER_FEEDBACK_TEXT = "SET_ANSWER_FEEDBACK_TEXT";
export const SET_CORRECT_ANSWER_SUBMITTED = "SET_CORRECT_ANSWER_SUBMITTED";

const {
  togglePopup,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const resetVisitedResources = () => ({ type: RESET_VISITED_RESOURCES });
export const setAnswerFeedbackText = (text) => ({
  text,
  type: SET_ANSWER_FEEDBACK_TEXT,
});
export const selectResource = (resource) => ({
  resource,
  type: SELECT_RESOURCE,
});
export const selectResourceType = (resourceType) => ({
  resourceType,
  type: SELECT_RESOURCE_TYPE,
});
export const addVisitedResource = (resource) => ({
  resource,
  type: ADD_VISITED_RESOURCE,
});
export const setCorrectAnswerSubmitted = (answer) => ({
  answer,
  type: SET_CORRECT_ANSWER_SUBMITTED,
});

export const thunks = {
  selectResource: (resource) => (dispatch, getState) => {
    const { resetBtnState } = getState();
    dispatch(selectResource(resource));
    dispatch(setCorrectAnswerSubmitted(false));
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
    // dispatch(addVisitedResource(resource));
  },
  selectResourceType: (resourceType) => (dispatch, getState) => {
    dispatch(toggleToastMessage(false));
    dispatch(selectResourceType(resourceType));
    dispatch(setCorrectAnswerSubmitted(false));
  },

  hideAnswerFeedbackPopup: () => (dispatch, getState) => {
    EventManager.broadcast("SECONDARY_CLICK");
    if (getState().currentPopup.indexOf(4) >= 0) {
      dispatch(common.togglePopup(4));
    }
  },

  submitAnswer: () => (dispatch, getState) => {
    const { resources } = data;
    const { selectedResource, selectedResourceType } = getState();
    const res = resources.find((r) => r.id == selectedResource);
    if (res.answer == selectedResourceType) {
      // correct answer
      dispatch(setCorrectAnswerSubmitted(true));
      setTimeout(() => {
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }, 250);
      if (res.hasPopup) {
        // set popuptext and show popup
        dispatch(setAnswerFeedbackText(res.popupText));
        dispatch(togglePopup(4));
      } else {
        dispatch(toggleToastMessage(true));
      }
    } else {
      // incorrect answer
      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 250);
      dispatch(setCorrectAnswerSubmitted(false));
      dispatch(toggleToastMessage(true));
    }
  },

  moveToNextQuestion: () => (dispatch, getState) => {
    const { selectedResource, visitedResources } = getState();
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 50);
    dispatch(toggleToastMessage(false));
    dispatch(setCorrectAnswerSubmitted(false));
    if (visitedResources.length < 9) {
      dispatch(setResetFocusState(true));
      setTimeout(() => {
        dispatch(selectResource(""));
        dispatch(selectResourceType(""));
        dispatch(addVisitedResource(selectedResource));
      }, 10);
    } else {
      dispatch(addVisitedResource(selectedResource));
      dispatch(togglePopup(5));
      setTimeout(() => {
        EventManager.broadcast("COMPLETION_SCREEN");
      }, 300);
    }
  },

  resetActivity: () => (dispatch, getState) => {
    const { currentPopup } = getState();
    if (currentPopup.indexOf(2) >= 0) {
      dispatch(togglePopup(2));
    }
    if (currentPopup.indexOf(5) >= 0) {
      dispatch(togglePopup(5));
    }
    dispatch(selectResource(""));
    dispatch(selectResourceType(""));
    dispatch(resetVisitedResources());
    dispatch(toggleToastMessage(false));
    dispatch(updateResetBtnState(true));
    dispatch(setCorrectAnswerSubmitted(false));
    setTimeout(() => {
      dispatch(togglePopup(1));
    }, 100);
  },
};

export const common = { ...actions };
