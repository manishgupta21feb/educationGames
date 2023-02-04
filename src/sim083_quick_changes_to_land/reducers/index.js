import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const startSimulation = (state = true, { type, value }) => {
  switch (type) {
    case actions.START_SIMULATION:
      return value;
    default:
      return state;
  }
};

const selectedButton = (state = 0, { type }) => {
  switch (type) {
    case actions.SELECT_BUTTON:
      return state + 1;
    case actions.RESET_BUTTON:
      return 0;
    default:
      return state;
  }
};

const toggleQuestion = (state = 0, { type, show }) => {
  switch (type) {
    case actions.TOGGLE_QUESTION:
      return show - 1;
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
const correctAnswerOne = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER_ONE:
      return correct;
    default:
      return state;
  }
};
const correctAnswerTwo = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER_TWO:
      return correct;
    default:
      return state;
  }
};
const partialAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.PARTIAL_CORRECT:
      return correct;
    default:
      return state;
  }
};
const selectedOption = (state = {}, { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return option;
    default:
      return state;
  }
};

const selectedOptionSecond = (state = {}, { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION_SECOND:
      return option;
    default:
      return state;
  }
};

const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.id;
    default:
      return state;
  }
};
const questionData = (state = "", action) => {
  switch (action.type) {
    case actions.QUESTION_DATA:
      return action.data;
    default:
      return state;
  }
};

const nextButtonClickedState = (state = false, { type, action }) => {
  switch (type) {
    case actions.BUTTON_CLICKED:
      return action;
    default:
      return state;
  }
};

const visitedHotspots = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.UPDATE_VISITED_HOTSPOTS:
      return [...state, hotspot];
    case actions.RESET_VISITED_HOTSPOTS:
      return [];
    default:
      return state;
  }
};

const questionCount = (state = 0, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

export default combineReducers({
  questionCount,
  correctAnswer,
  correctAnswerOne,
  correctAnswerTwo,
  partialAnswer,
  selectedOption,
  selectedButton,
  toggleQuestion,
  visitedHotspots,
  answerAttempted,
  selectedHotspot,
  startSimulation,
  nextButtonClickedState,
  selectedOptionSecond,
  questionData,
  ...reducers,
});
