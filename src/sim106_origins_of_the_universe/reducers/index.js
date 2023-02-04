import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";
import { shuffleArray } from "../helper.js";
const getVideoEnd = (state = false, { type, value }) => {
  switch (type) {
    case actions.VIDEO_END:
      return value;
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

export const getRadioBtnChecked = (state = false, { type, value }) => {
  switch (type) {
    case actions.CHECKED_OPTION:
      return value;

    default:
      return state;
  }
};

export const getIsAnswerCorrect = (state = false, { type, value }) => {
  switch (type) {
    case actions.IS_ANSWER_CORRECT:
      return value;

    default:
      return state;
  }
};

export const getQuestionNumber = (state = 0, { type, value }) => {
  switch (type) {
    case actions.QUESTION_NUMBER:
      return value;

    default:
      return state;
  }
};

export const getLevel = (state = [], { type, value }) => {
  switch (type) {
    case actions.LEVEL:
      let result = state;
      if (!result.includes(value)) {
        result.push(value);
      }
      return result;
    default:
      return state;
  }
};

export const getViewPlayed = (state = [], { type, value }) => {
  switch (type) {
    case actions.VIEW_PLAYED:
      if (!state.includes(value)) {
        return [...state, value];
      }
    default:
      return state;
  }
};

export const visitedNodes = (state = [], { type, node }) => {
  switch (type) {
    case actions.UPDATE_VISITED_NODE:
      return [...state, node];
    case actions.RESET_VISITED_NODE:
      return [];
    default:
      return state;
  }
};

const secondScreen = (state = false, { type, value }) => {
  switch (type) {
    case actions.SECOND_SCREEN:
      return value;
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

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const questionsData = (
  state = shuffleArray([...data.questionsData]),
  action
) => {
  //const questionsData = (state = [...data.questionsData], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    case actions.UPDATED_QUES_DATA:
      return action.data;
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

const selectedTab = (state = 0, { type, items }) => {
  switch (type) {
    case actions.GLOBAL_SELECTED_TAB:
      return items;
    default:
      return state;
  }
};

const getScreenNumber = (state = { screen: 1, btn: 0 }, { type, value }) => {
  switch (type) {
    case actions.SCREEN_NUMBER:
      let result = { ...state };
      result.screen = value.screen;
      result.btn = value.btn;
      return result;
    default:
      return state;
  }
};

const getIsVisitedBoth = (state = [], { type, value }) => {
  switch (type) {
    case actions.IS_VISTED_BOTH:
      let result = [];
      if (state.length > 0) {
        result = [...state];
        result.push(value);
      } else {
        result.push(value);
      }
      return result;
    case actions.RESET_IS_VISTED_BOTH:
      let empty = [];
      return empty;
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

const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
    default:
      return state;
  }
};

const getIsOptionSelected = (state = true, { type, value }) => {
  switch (type) {
    case actions.IS_OPTION_SELECTED:
      return value;
    default:
      return state;
  }
};


export default combineReducers({
  getIsOptionSelected,
  getVideoEnd,
  getIsVisitedBoth,
  getSelectedOption,
  getRadioBtnChecked,
  getIsAnswerCorrect,
  getQuestionNumber,
  getLevel,
  getViewPlayed,
  visitedNodes,
  secondScreen,
  selectedQuestion,
  submitButtonPressed,
  questionCount,
  questionsData,
  submitAnswer,
  selectedTab,
  getScreenNumber,
  selectedAnswerOption,
  wrongAnswer,
  ...reducers,
});
