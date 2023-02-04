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

const isMCQ = (state = false, { type, flag }) => {
  switch (type) {
    case actions.IS_MCQ:
      return flag;
    default:
      return state;
  }
};

const isReset = (state = false, { type, flag }) => {
  switch (type) {
    case actions.IS_RESET:
      return flag;
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

const isBall = (state = false, { type, flag }) => {
  switch (type) {
    case actions.IS_BALL:
      return flag;
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

const fluidData = (state = [...data.fluid], { type, arr }) => {
  switch (type) {
    case actions.FLUID_DATA:
      return [...arr];
    default:
      return state;
  }
};

const fluidType = (state = "", { type, color }) => {
  switch (type) {
    case actions.FLUID_TYPE:
      return color;
    default:
      return state;
  }
};

const fluidPouredCount = (state = -1, { type, count }) => {
  switch (type) {
    case actions.FLUID_POURED_COUNT:
      return count;
    default:
      return state;
  }
};

const sphereData = (state = [...data.sphere], { type, arr }) => {
  switch (type) {
    case actions.SPHERE_DATA:
      return [...arr];
    default:
      return state;
  }
};

const sphereType = (state = "", { type, color }) => {
  switch (type) {
    case actions.SPHERE_TYPE:
      return color;
    default:
      return state;
  }
};

const animationIndex = (state = -1, { type, index }) => {
  switch (type) {
    case actions.ANIMATION_INDEX:
      return index;
    default:
      return state;
  }
};

const getOptionList = (state = [...data.equationsData[0].options], action) => {
  switch (action.type) {
    case actions.GET_OPTION_LIST:
      return [...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  resetFocusState,
  isMCQ,
  isBall,
  wrongAnswer,
  submitAnswer,
  questionsData,
  questionCount,
  selectedQuestion,
  submitButtonPressed,
  selectedAnswerOption,
  fluidData,
  fluidType,
  fluidPouredCount,
  sphereData,
  sphereType,
  animationIndex,
  animateEnd,
  isReset,
  getOptionList,
  ...reducers,
});
