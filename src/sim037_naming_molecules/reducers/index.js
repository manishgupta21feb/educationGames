import { combineReducers } from "redux";
import * as actions from "../actions";
import reducers from "../../app/reducers";
import data from "../data";

const selectedQuestion = (state = 0, { type }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return state + 1;
    case actions.RESET_QUESTION:
      return 0;
    default:
      return state;
  }
};

const selectedOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return option;
    default:
      return state;
  }
};

const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTTED:
      return attempted;
    default:
      return state;
  }
};

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const answered = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_ANSWERED:
      return value;
    default:
      return state;
  }
};

const questions = (
  state = data.classifyingMatterContent.map((q) => {
    q.options = q.options
      .map((o) => ({ ...o }))
      .sort(() => 0.5 - Math.random());
    return { ...q };
  }),
  { type, value }
) => {
  switch (type) {
    case actions.SET_QUESTIONS:
      return value;
    default:
      return state;
  }
};

export const hideButtons = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_HIDE_BUTTONS:
      return value;
    default:
      return state;
  }
};

export const selectedButton = (state = "", { type, value }) => {
  switch (type) {
    case actions.SET_SELECTED_BUTTON:
      return value;
    default:
      return state;
  }
};

export const attemptedCount = (state = 1, { type, value }) => {
  switch (type) {
    case actions.COUNT_ATTEMPTS:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  selectedQuestion,
  selectedOption,
  answerAttempted,
  correctAnswer,
  answered,
  questions,
  hideButtons,
  selectedButton,
  attemptedCount,
  ...reducers,
});
