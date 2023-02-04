import * as actions from "../actions";
import dataSet from "../data/index";

import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const resetFocusState = (state = false, { type, focus }) => {
  switch (type) {
    case actions.SET_RESET_FOCUS_STATE:
      return focus;
    default:
      return state;
  }
};

const startSimulation = (state = true, { type, value }) => {
  switch (type) {
    case actions.START_SIMULATION:
      return value;
    default:
      return state;
  }
};

const questionCount = (state = 0, action) => {
  switch (action.type) {
    case actions.SET_QUESTION_COUNT:
      return action.count;
    default:
      return state;
  }
};

const questionsData = (state = [...dataSet.promptDataMCQ], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const questionText = (state = [...dataSet.promptDataMCQ][0].questionText, action) => {
  switch (action.type) {
    case actions.SET_QUESTION_TEXT:
      return action.text;
    default:
      return state;
  }
};

const answerImg = (state = 1, action) => {
  switch (action.type) {
    case actions.SET_ANSWER_IMG:
      return action.value;
    default:
      return state;
  }
};

const mcqOptions = (state = [...dataSet.promptDataMCQ][0].mcqOptions, action) => {
  switch (action.type) {
    case actions.SET_MCQ_OPTIONS:
      return action.data;
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

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
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


const audioStatePlay = (state = true, { type, action }) => {
  switch (type) {
    case actions.AUDIO_STATE_PLAY:
      return !state;
    case actions.AUDIO_STATE_STOP:
      return false;
    default:
      return state;
  }
};

const answerStatus = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_ANSWER_STATUS:
      return value;
    default:
      return state;
  }
};

const showStatic = (state = false, { type, staticState }) => {
  switch (type) {
    case actions.SET_STATIC:
      return staticState;
    default:
      return state;
  }
};


export default combineReducers({
  resetFocusState,
  startSimulation,
  startSimulation,
  questionCount,
  questionsData,
  questionText,
  answerImg,
  mcqOptions,
  mcqOptions,
  selectedOption,
  correctAnswer,
  answerAttempted,
  audioStatePlay,
  showStatic,
  answerStatus,
  ...reducers
})