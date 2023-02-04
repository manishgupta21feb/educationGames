import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
    default:
      return state;
  }
};

const getAnimationEnd = (state = false, { type, value }) => {
  switch (type) {
    case actions.ANIMATION_END:
      return value;
    default:
      return state;
  }
};

const mcqShow = (state = false, { type, value }) => {
  switch (type) {
    case actions.IS_MCQ_SHOW:
      return value;
    default:
      return state;
  }
};
const setQuestionValue = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return value;
    default:
      return state;
  }
};
const questionCountValue = (state = 1, { type, value }) => {
  switch (type) {
    case actions.QUESTIONS_COUNT:
      return value;
    default:
      return state;
  }
};
const secondScreen = (state = false, { type, id }) => {
  switch (type) {
    case actions.SECOND_SCREEN:
      return id;
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
const updatedChart = (state = false, { type, chart }) => {
  switch (type) {
    case actions.UPDATE_CHART:
      return chart;
    default:
      return state;
  }
};
const dropDownOne = (state = {}, { type, dropone }) => {
  switch (type) {
    case actions.DROP_DOWN_ONE:
      return dropone;
    default:
      return state;
  }
};

const dropDownTwo = (state = {}, { type, droptwo }) => {
  switch (type) {
    case actions.DROP_DOWN_TWO:
      return droptwo;
    default:
      return state;
  }
};

const dropDownThree = (state = {}, { type, dropthree }) => {
  switch (type) {
    case actions.DROP_DOWN_THREE:
      return dropthree;
    default:
      return state;
  }
};

const selectedHotspot = (state = false, action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.id;

    default:
      return state;
  }
};

////
const correctAnswer = (state = [], { type, id }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return [...state, id];
    case actions.RESET_CORRECT_ANSWER:
      return [];
    default:
      return state;
  }
};

const wrongAnswer = (state = false, { type, id }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return id;
    default:
      return state;
  }
};
const submitAnswer = (state = false, { type, id }) => {
  switch (type) {
    case actions.SUBMIT_ANSWER:
      return id;
    default:
      return state;
  }
};
const submitButtonPressed = (state = false, { type, id }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON_PRESSED:
      return id;
    default:
      return state;
  }
};
const partiallyCorrect = (state = false, { type, id }) => {
  switch (type) {
    case actions.PARTIALLY_CORRECT:
      return id;
    default:
      return state;
  }
};
export default combineReducers({
  demoReducer,
  partiallyCorrect,
  submitButtonPressed,
  submitAnswer,
  wrongAnswer,
  setQuestionValue,
  questionCountValue,
  mcqShow,
  secondScreen,
  visitedHotspots,
  selectedHotspot,
  correctAnswer,
  updatedChart,
  dropDownOne,
  dropDownTwo,
  dropDownThree,
  getAnimationEnd,
  ...reducers,
});
