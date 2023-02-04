import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import data from "../data";

const activeScreen = (state = "screen1", { type, screenId }) => {
  switch (type) {
    case actions.SET_ACTIVE_SCREEN:
      return screenId;
    default:
      return state;
  }
};

const selectedHotspot = (state = "", { type, hotspot }) => {
  switch (type) {
    case actions.SELECT_HOTSPOT:
      return hotspot;
    default:
      return state;
  }
};

const visitedHotspots = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.ADD_VISITED_HOTSPOT:
      return [...state, hotspot];
    case actions.RESET_VISITED_HOTSPOT:
      return [];
    default:
      return state;
  }
};

const mcqQuestions = (
  state = data.screen2MCQs.map((m) => ({ ...m })),
  { type, questions }
) => {
  switch (type) {
    case actions.SET_MCQ_QUESTIONS:
      return questions;
    default:
      return state;
  }
};

const selectedMCQQuestion = (state = null, { type, question }) => {
  switch (type) {
    case actions.SET_ACTIVE_MCQ_QUESTION:
      return question;
    default:
      return state;
  }
};

const mcqAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SET_MCQ_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const questionAnswered = (state = false, { type, answered }) => {
  switch (type) {
    case actions.SET_QUESTION_ANSWERED:
      return answered;
    default:
      return state;
  }
};

export default combineReducers({
  activeScreen,
  mcqQuestions,
  selectedHotspot,
  visitedHotspots,
  mcqAnswerOption,
  questionAnswered,
  selectedMCQQuestion,
  ...reducers,
});
