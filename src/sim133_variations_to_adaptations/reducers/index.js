import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import { cloneDeep } from "lodash";
import data from "../data";

const updateTabsData = (
  state = cloneDeep(data.mainScreen.hotSpots),
  { type, _data }
) => {
  switch (type) {
    case actions.HOT_SPOTS:
      return _data;
    default:
      return state;
  }
};

const currentWindow = (state = "launchScreen", { type, location }) => {
  switch (type) {
    case actions.CURRENT_WINDOW:
      return location;
    default:
      return state;
  }
};
const currentLocation = (state = "", { type, location }) => {
  switch (type) {
    case actions.CURRENT_LOCATION:
      return location;
    default:
      return state;
  }
};
const questionState = (state = false, { type, qState }) => {
  switch (type) {
    case actions.QUESTION_STATE:
      return qState;
    default:
      return state;
  }
};
const currentOptionState = (state = "", { type, selection }) => {
  switch (type) {
    case actions.CURRENT_OPTION:
      return selection;
    default:
      return state;
  }
};
const answerSubmitted = (state = "", { type, selection }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return selection;
    default:
      return state;
  }
};
export const getSelectedOption = (state = "", { type, value }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return value;
    default:
      return state;
  }
};

export const getQuestionNumber = (state = 0, { type, value }) => {
  switch (type) {
    case actions.QUESTION_NUMBER:
      return value;
    default:
      return state;
  }
};
export const getSubmitBtnVisibility = (state = false, { type, value }) => {
  switch (type) {
    case actions.SUBMIT_BTN_VISIBILITY:
      return value;
    default:
      return state;
  }
};
export const getAnswer = (state = false, { type, value }) => {
  switch (type) {
    case actions.ANSWER:
      return value;
    default:
      return state;
  }
};

export const getAttempts = (state = 0, { type, value }) => {
  switch (type) {
    case actions.ATTEMPTS:
      return value;
    default:
      return state;
  }
};

export const screen = (state = "first", { type, value }) => {
  switch (type) {
    case actions.UPDATE_SCREEN:
      return value;
    default:
      return state;
  }
};
export default combineReducers({
  updateTabsData,
  currentWindow,
  questionState,
  currentOptionState,
  currentLocation,
  answerSubmitted,
  getSelectedOption,
  getQuestionNumber,
  getSubmitBtnVisibility,
  getAnswer,
  getAttempts,
  screen,
  ...reducers,
});
