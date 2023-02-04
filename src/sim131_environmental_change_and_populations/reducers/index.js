import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const isInteractive = (state = false, { type, status }) => {
  switch (type) {
    case actions.Is_INTERACTIVE:
      return status;
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
}

const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTED:
      return attempted;
    default:
      return state;
  }
}

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
}

const questionCount = (state = 1, { type, count }) => {
  switch (type) {
    case actions.QUESTION_COUNT:
      return count;
    default:
      return state;
  }
}

const questionNo = (state = 0, { type, no }) => {
  switch (type) {
    case actions.QUESTION_NO:
      return no;
    default:
      return state;
  }
}

const nextButtonClickStatus = (state = false, { type, status }) => {
  switch (type) {
    case actions.SET_NEXT_BUTTON_CLICK:
      return status;
    default:
      return state;
  }
}

export default combineReducers({
  isInteractive,
  selectedOption,
  answerAttempted,
  correctAnswer,
  questionCount,
  questionNo,
  nextButtonClickStatus,
  ...reducers,
});
