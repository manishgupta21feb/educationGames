import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import data from "../data";
import { randomizeQuestions } from "../helper";

const selectedOrganisms = (state = [], action) => {
  switch (action.type) {
    case actions.SELECT_ORGANISM:
      if (state.indexOf(action.id) == -1) {
        return [...state, action.id];
      }
      return state;

    case actions.RESET_ORGANISMS:
      return [];

    default:
      return state;
  }
};

const selectedQuestion = (state = 1, { type }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return state + 1;
    case actions.RESET_QUESTION:
      return 1;
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

const selectedOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
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

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
    default:
      return state;
  }
};

const feedbackNarration = (state = true, action) => {
  switch (action.type) {
    case actions.FEEDBACK_NARRATION:
      return action.val;
    default:
      return state;
  }
};

const showMCQ = (state = true, { type, show }) => {
  switch (type) {
    case actions.SHOW_MCQ_TOGGLE:
      return show;
    default:
      return state;
  }
};
const showMCQCommonText = (state = true, { type, show }) => {
  switch (type) {
    case actions.TOGGLE_SHOW_MCQ_COMMON_TEXT:
      return show;
    default:
      return state;
  }
};

const questions = (
  state = randomizeQuestions(data.mcqData),
  { type, array }
) => {
  switch (type) {
    case actions.SET_RANDOMIZED_QUESTIONS:
      return randomizeQuestions(data.mcqData);
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

export default combineReducers({
  showMCQ,
  questions,
  showStatic,
  correctAnswer,
  selectedOption,
  answerAttempted,
  selectedQuestion,
  showMCQCommonText,
  selectedOrganisms,
  questionCount,
  ...reducers,
});
