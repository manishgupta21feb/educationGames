import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

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

const questionNo = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SET_QUESTION_NO:
      return value;
    default:
      return state;
  }
};

const questionCount = (state = 1, { type, count }) => {
  switch (type) {
    case actions.SET_QUESTION_COUNT:
      return count;
    default:
      return state;
  }
};

const randomQuestion = (state = [], { type, value }) => {
  switch (type) {
    case actions.SET_RANDOM_QUESTION:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  selectedOption,
  answerAttempted,
  correctAnswer,
  questionNo,
  questionCount,
  randomQuestion,
  ...reducers,
});
