import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const selectAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.SELECT_CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

const questionsData = (
  state = data.nuclearData.map((n) => ({ ...n })),
  action
) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
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

const answerSubmitted = (state = false, { type, submitted }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return submitted;
    default:
      return state;
  }
};

const wrongAnswer = (state = false, { type, value }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return value;
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

const showDialog = (state = true, action) => {
  switch (action.type) {
    case actions.SHOW_DIALOG:
      return action.val;
    default:
      return state;
  }
};

const reactant1 = (state = {}, { type, reactant }) => {
  switch (type) {
    case actions.SET_REACTANT1:
      return { ...reactant };
    default:
      return state;
  }
};

const reactant2 = (state = {}, { type, reactant }) => {
  switch (type) {
    case actions.SET_REACTANT2:
      return { ...reactant };
    default:
      return state;
  }
};

const resultant = (state = {}, { type, resultant: _r }) => {
  switch (type) {
    case actions.SET_RESULTANT:
      return { ..._r };
    default:
      return state;
  }
};

const simulationStart = (state = true, { type, value }) => {
  switch (type) {
    case actions.SIMULATION_START:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  resultant,
  reactant1,
  reactant2,
  showDialog,
  wrongAnswer,
  questionsData,
  questionCount,
  submittedAnswer,
  answerSubmitted,
  simulationStart,
  selectedQuestion,
  selectAnswerOption,
  ...reducers,
});
