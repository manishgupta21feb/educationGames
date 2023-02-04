import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

export const viewScreen = (state = true, { type, value }) => {
  switch (type) {
    case actions.VIEW_SCREEN:
      return value;
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

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const questionsData = (state = [...data.home.frames], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return question;
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

const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

const viewFrame = (state = "", { type, val }) => {
  switch (type) {
    case actions.VIEW_FRAME:
      return val;
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

export const countNext = (state = 0, { type, value }) => {
  switch (type) {
    case actions.COUNT_NEXT:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  getSelectedOption,

  viewScreen,
  subScreen,
  questionCount,
  questionsData,
  selectedQuestion,
  answerSubmitted,
  submittedAnswer,
  viewFrame,
  visitedHotspotBtn,
  countNext,
  ...reducers,
});
