import { combineReducers } from "redux";
import * as actions from "../actions";
import reducers from "../../app/reducers";
import RawTextData from "../data";

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

const showToastMessage = (state = false, { toggle, type }) => {
  switch (type) {
    case actions.TOGGLE_TOAST_MESSAGE:
      return toggle;
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

export const resetCounterValues = (state = false, { type, value }) => {
  switch (type) {
    case actions.RESET_COUNTER:
      return value;
    default:
      return state;
  }
};
export const countAttempts = (state = [], { type, value }) => {
  switch (type) {
    case actions.COUNT_ATTEMPTS:
      const temp = [...state];
      const indexVal = state.indexOf(value);
      if (indexVal == -1) {
        temp.push(value);
      }
      // console.log("temp", temp);
      return temp;
    case actions.DELETE_ATTEMPTS:
      return [];
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

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};
const questionsData = (
  state = RawTextData.equations.map((n) => ({ ...n })),
  action
) => {
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
      return { ...question };
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

const counters = (state = {}, { type, payload }) => {
  switch (type) {
    case actions.UPDATE_COUNTERS_VALUE:
      return { ...payload };
    case actions.RESET_COUNTERS_VALUE:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  counters,
  submitAnswer,
  correctAnswer,
  questionsData,
  questionCount,
  countAttempts,
  answerAttempted,
  selectedQuestion,
  showToastMessage,
  resetCounterValues,
  submitButtonPressed,
  getSubmitBtnVisibility,
  ...reducers,
});
