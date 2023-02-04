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

const mcqQuestionsData = (state = [...data.mcqQuestions], action) => {
  switch (action.type) {
    case actions.MCQ_QUESTIONS_DATA:
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

const viewFrame = (state = "", { type, val }) => {
  switch (type) {
    case actions.VIEW_FRAME:
      return val;
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

const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
    default:
      return state;
  }
};

export default combineReducers({
  selectedAnswerOption,
  submitButtonPressed,
  selectedQuestion,
  submitAnswerMcq,
  questionCount,
  questionsData,

  submitBtnDisabled,
  viewScreen,
  subScreen,
  viewFrame,
  visitedHotspotBtn,
  mcqQuestionsData,
  wrongAnswer,
  ...reducers,
});
