import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

const questionsData = (state = [...data.screenOneQues], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const submitAnswerMcq = (state = false, { type, answer }) => {
  switch (type) {
    case actions.SUBMIT_ANSWER_MCQ:
      return answer;
    default:
      return state;
  }
};

const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return { ...question };
    default:
      return state;
  }
};

const submitButtonPressed = (state = false, { type, pressed }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON_PRESSED:
      return pressed;
    default:
      return state;
  }
};

const submitBtnDisabled = (state = true, { type, val }) => {
  switch (type) {
    case actions.SET_SUBMIT_BUTTON_DISABLED:
      return val;
    default:
      return state;
  }
};

export const subScreen = (state = true, { type, value }) => {
  switch (type) {
    case actions.SUB_SCREEN:
      return value;
    default:
      return state;
  }
};

export const visitedHotspotBtn = (state = [], { type, value }) => {
  switch (type) {
    case actions.BUTTON_VISITED:
      if (value != "") {
        return [...state, value];
      } else {
        return [];
      }

    default:
      return state;
  }
};

const currentHotSpot = (state = "", { type, id }) => {
  switch (type) {
    case actions.CURRENT_HOTSPOT:
      return id;
    default:
      return state;
  }
};

export default combineReducers({
  selectedAnswerOption,
  submitButtonPressed,
  selectedQuestion,
  submitAnswerMcq,

  questionsData,

  submitBtnDisabled,

  subScreen,

  visitedHotspotBtn,
  currentHotSpot,

  ...reducers,
});
