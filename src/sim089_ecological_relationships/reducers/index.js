import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";
const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
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
const setLivingOrganismValue = (state = {}, { type, value }) => {
  switch (type) {
    case actions.SET_LIVING_ORGANISM:
      return value;
    default:
      return state;
  }
};
const setClassifyValue = (state = {}, { type, value }) => {
  switch (type) {
    case actions.SET_CLASSIFY:
      return value;
    default:
      return state;
  }
};
const setEnergyValue = (state = {}, { type, value }) => {
  switch (type) {
    case actions.SET_ENERGY:
      return value;
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
const partiallyCorrect = (state = false, { type, pressed }) => {
  switch (type) {
    case actions.PARTIALLY_CORRECT:
      return pressed;
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
const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
    default:
      return state;
  }
};
const incorrectAnswer = (state = [], { type, value }) => {
  switch (type) {
    case actions.INCORRECT_ANSWER_PERFORMED:
      return [...state, value];
    case actions.RESET_INCORRECT_ANSWER:
      return [];
    default:
      return state;
  }
};
const correctAnswer = (state = [], { type, value }) => {
  switch (type) {
    case actions.CORRECT_ANSWER_PERFORMED:
      return [...state, value];
    case actions.RESET_CORRECT_ANSWER:
      return [];
    default:
      return state;
  }
};
const updateMcqData = (state = [...data.mcqData], { type, value }) => {
  switch (type) {
    case actions.UPDATE_MCQ_DATA:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  demoReducer,
  updateMcqData,
  setQuestionValue,
  setLivingOrganismValue,
  setClassifyValue,
  setEnergyValue,
  questionCountValue,
  submitAnswer,
  wrongAnswer,
  partiallyCorrect,
  submitButtonPressed,
  incorrectAnswer,
  correctAnswer,
  ...reducers,
});
