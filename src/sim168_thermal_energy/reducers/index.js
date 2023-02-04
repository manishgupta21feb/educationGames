import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const visitedMainOptions = (state = [], { type, option }) => {
  switch (type) {
    case actions.SET_MAIN_OPTION:
      return [...state, option];
    case actions.RESET_MAIN_OPTION:
      return [];
    default:
      return state;
  }
};

const question = (state = null, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return question;
    default:
      return state;
  }
};

const subQuestion = (state = null, { type, question }) => {
  switch (type) {
    case actions.SET_SUB_QUESTION:
      return question;
    default:
      return state;
  }
};

const mcqAnswer = (state = "", { type, answer }) => {
  switch (type) {
    case actions.SET_MCQ_ANSWER:
      return answer;
    default:
      return state;
  }
};

const setQuestionAnswered = (state = false, { type, answered }) => {
  switch (type) {
    case actions.SET_QUESTION_ANSWERED:
      return answered;
    default:
      return state;
  }
};

export default combineReducers({
  question,
  mcqAnswer,
  subQuestion,
  visitedMainOptions,
  setQuestionAnswered,
  ...reducers,
});
