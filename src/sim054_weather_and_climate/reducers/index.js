import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const resetFocusState = (state = false, { type, focus }) => {
  switch (type) {
    case actions.common.SET_RESET_FOCUS_STATE:
      return focus;
    default:
      return state;
  }
};

const questionsData = (state = [...data.equationsData], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};
const setRadio = (state = 0, action) => {
  switch (action.type) {
    case actions.SET_RADIO:
      return action.count;
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

const submitAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.SUBMIT_ANSWER:
      return answer;
    default:
      return state;
  }
};

const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
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

export default combineReducers({
  setRadio,
  resetFocusState,
  wrongAnswer,
  submitAnswer,
  questionsData,
  questionCount,
  selectedQuestion,
  submitButtonPressed,
  selectedAnswerOption,
  ...reducers,
});
