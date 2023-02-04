import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const questionsData = (
  state = data.questionsData.map((q) => ({ ...q })),
  action
) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const selectedQuestion = (state = {}, { type, value }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return data.questionsData[value];
    default:
      return state;
  }
};

const selectQuestionIndex = (state = 0, { type, index = 0 }) => {
  switch (type) {
    case actions.SELECT_INDEX:
      return index;
    default:
      return state;
  }
};

const toggleQuestion = (state = true, { type, show }) => {
  switch (type) {
    case actions.TOGGLE_QUESTION:
      return show;
    default:
      return state;
  }
};

const questionCount = (state = 1, { type, count }) => {
  switch (type) {
    case actions.QUESTIONS_COUNT:
      return count;
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

const answerSubmitted = (state = false, { type, submitted }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return submitted;
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

const audioStopped = (state = false, { type, stopped }) => {
  switch (type) {
    case actions.SET_AUDIO_STOPPED:
      return stopped;
    default:
      return state;
  }
};

export default combineReducers({
  audioStopped,
  questionsData,
  questionCount,
  toggleQuestion,
  submittedAnswer,
  answerSubmitted,
  selectedQuestion,
  selectAnswerOption,
  selectQuestionIndex,
  ...reducers,
});
