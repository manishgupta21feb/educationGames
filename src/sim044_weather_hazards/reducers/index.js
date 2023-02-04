import * as actions from "../actions/activity";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

export const selectedHotspot = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_HOTSPOT:
      return id;
    default:
      return state;
  }
};

export const visitedNodes = (state = [], { type, node }) => {
  switch (type) {
    case actions.UPDATE_VISITED_NODE:
      return [...state, node];
    case actions.DELETE_UPDATE_VISITED_NODE:
      return [];
    default:
      return state;
  }
};

const viewType = (state = "hotspot", { type, view }) => {
  switch (type) {
    case actions.SET_VIEW_TYPE:
      return view;
    default:
      return state;
  }
};

export const visitedSpots = (state = [], { type, node }) => {
  switch (type) {
    case actions.UPDATE_VISITED_SPOTS:
      return [...state, node];
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

const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
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

const questionsData = (state = [...data.questionsData], action) => {
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

const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
    default:
      return state;
  }
};

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.SELECT_CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

const answerSubmitted = (state = false, { type, submitted }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return submitted;
    default:
      return state;
  }
};

export const resetBtnState = (state = true, action) => {
  switch (action.type) {
    case actions.SET_RESET_BUTTON_STATE:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  selectedHotspot,
  visitedNodes,
  viewType,
  visitedSpots,
  submitAnswer,
  selectedAnswerOption,
  selectedQuestion,
  submitButtonPressed,
  questionsData,
  questionCount,
  wrongAnswer,
  toastMsg,
  submittedAnswer,
  answerSubmitted,
  resetBtnState,
  ...reducers,
});
