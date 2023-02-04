import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { shuffleArray } from "../helper.js";
import { combineReducers } from "redux";

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

const setOptions = (state = data.subOptions.map((d) => ({ ...d })), action) => {
  switch (action.type) {
    case actions.SET_OPTIONS:
      return shuffleArray(state);
    default:
      return state;
  }
};

const activityCompleted = (state = false, { type, completed }) => {
  switch (type) {
    case actions.SET_ACTIVITY_COMPLETED:
      return completed;
    default:
      return state;
  }
};

const isResetButtonDisable = (state = true, { type, data }) => {
  switch (type) {
    case actions.IS_RESET_BUTTON_DISABLE:
      return data;
    default:
      return state;
  }
};

const selectedOptions = (state = [], { type, data }) => {
  switch (type) {
    case actions.SELECTED_OPTIONS:
      state.push(data);
      return state;
    case actions.RESET_OPTIONS:
      state.length = 0;
      return state;
    default:
      return state;
  }
};

const questionSet = (state = data.questionSet, { type, items }) => {
  switch (type) {
    case actions.UPDATE_QUESTION:
      return items;
    default:
      return state.slice(0, 1);
  }
};

const getLabels = (state = { live: "", aria: "" }, { type, live, aria }) => {
  switch (type) {
    case actions.GET_LABELS:
      state.live = live;
      state.aria = aria;
      return state;
    default:
      return state;
  }
};

const getNextQuestion = (state = false, { type, data }) => {
  switch (type) {
    case actions.GET_NEXT_QUESTION:
      return data;
    default:
      return state;
  }
};
const updateHeadingValue = (state = 1, { type, val }) => {
  switch (type) {
    case actions.UPDATE_HEADING:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  activityCompleted,
  questionSet,
  selectedOptions,
  getNextQuestion,
  setOptions,
  isResetButtonDisable,
  getLabels,
  updateHeadingValue,
  ...reducers,
});
