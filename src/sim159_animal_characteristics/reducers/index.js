import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const mcq1 = (state = data.mcq1.map((m) => ({ ...m })), { type, mcqs }) => {
  switch (type) {
    case actions.SET_MCQ1:
      return mcqs;
    case actions.RESET_MCQ1:
      return data.mcq1.map((m) => ({ ...m }));
    default:
      return state;
  }
};

const mcq2 = (state = data.mcq2.map((m) => ({ ...m })), { type, mcqs }) => {
  switch (type) {
    case actions.SET_MCQ2:
      return mcqs;
    case actions.RESET_MCQ2:
      return data.mcq2.map((m) => ({ ...m }));
    default:
      return state;
  }
};

const question = (state = null, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return question;
    default:
      return state;
  }
};

const mcq1Answer = (state = "", { type, answer }) => {
  switch (type) {
    case actions.SET_MCQ1_ANSWER:
      return answer;
    default:
      return state;
  }
};

const mcq2Answer = (state = [], { type, answer }) => {
  switch (type) {
    case actions.SET_MCQ2_ANSWER:
      if (state.indexOf(answer) >= 0) {
        return state.filter((s) => s !== answer);
      } else {
        return [...state, answer];
      }
    case actions.RESET_MCQ2_ANSWER:
      return [];
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
  mcq1,
  mcq2,
  question,
  mcq1Answer,
  mcq2Answer,
  questionAnswered,
  ...reducers,
});
