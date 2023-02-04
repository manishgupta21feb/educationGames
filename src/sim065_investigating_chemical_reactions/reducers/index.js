import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const questionsData = (
  state = data.equationsData.map((q) => ({ ...q })),
  action
) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};
const selectedOptions = (state = [], { type, id }) => {
  switch (type) {
    case actions.TOGGLE_OPTION:
      const _state = [...state];
      const index = _state.indexOf(id);
      if (index >= 0) {
        _state.splice(index, 1);
        return _state;
      }
      return [...state, id];
    case actions.RESET_OPTION:
      state = [];
      return state;
    default:
      return state;
  }
};

const selectAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
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

const selectedQuestion = (state = 0, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return question;

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

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const isNextButtonEnable = (state = true, { type, val }) => {
  switch (type) {
    case actions.NEXT_BUTTON_ENABLE:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  questionCount,
  submittedAnswer,
  questionsData,
  answerSubmitted,
  selectAnswerOption,
  toastMsg,
  selectedOptions,
  selectedQuestion,
  isNextButtonEnable,
  ...reducers,
});
