import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

export const disabledNavigationButtons = ["selfcheck"];

const screenCount = (state = 0, action) => {
  switch (action.type) {
    case actions.SCREEN_COUNT:
      return action.count;
    default:
      return state;
  }
};

const questionCount = (state = 0, action) => {
  switch (action.type) {
    case actions.QUESTION_COUNT:
      return action.count;
    default:
      return state;
  }
};

const leftCounter = (state = 50, action) => {
  switch (action.type) {
    case actions.LEFT_COUNTER:
      return action.count;
    default:
      return state;
  }
};

const rightCounter = (state = 50, action) => {
  switch (action.type) {
    case actions.RIGHT_COUNTER:
      return action.count;
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

const isMCQ = (state = false, { type, flag }) => {
  switch (type) {
    case actions.IS_MCQ:
      return flag;
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

const animateType = (state = "none", { type, option }) => {
  switch (type) {
    case actions.ANIMATE_TYPE:
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

const animateEnd = (state = false, { type, flag }) => {
  switch (type) {
    case actions.ANIMATE_END:
      return flag;
    default:
      return state;
  }
};

const nextButton = (state = false, { type, flag }) => {
  switch (type) {
    case actions.NEXT_BUTTON:
      return flag;
    default:
      return state;
  }
};

export default combineReducers({
  screenCount,
  isMCQ,
  questionCount,
  selectedOption,
  correctAnswer,
  answerAttempted,
  leftCounter,
  rightCounter,
  animateType,
  animateEnd,
  nextButton,
  ...reducers,
});
