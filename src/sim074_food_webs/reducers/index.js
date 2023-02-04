import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
    default:
      return state;
  }
};
const setQuestion = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return value;
    default:
      return state;
  }
};
const questionCount = (state = 1, { type, value }) => {
  switch (type) {
    case actions.QUESTION_COUNT:
      return value;
    default:
      return state;
  }
};
const clickedButtonValue = (state = [], { type, value }) => {
  switch (type) {
    case actions.CLICKED_BUTTON_VALUE:
      return [...state, value];
    case actions.RESET_CLICKED_BUTTON:
      return [];
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

const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
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
const answerCorrect = (state = [], { type, value }) => {
  switch (type) {
    case actions.ANSWER_CORRECT:
      return [...state, value];
    case actions.RESET_CORRECT_ANSWER:
      return [];
    default:
      return state;
  }
};
const selectedButton = (state = [], { type, value }) => {
  switch (type) {
    case actions.SELECTED_BUTTON:
      return [...state, value];
    case actions.RESET_SELECTED_BUTTON:
      return [];
    default:
      return state;
  }
};
const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECTED_ANSWER:
      return id;
    default:
      return state;
  }
};
const questionVisited = (state = [], { type, value }) => {
  switch (type) {
    case actions.QUESTION_VISITED:
      return [...state, value];
    case actions.RESET_QUESTION_VISITED:
      return [];
    default:
      return state;
  }
};
const disabledButton = (state = false, { type, value }) => {
  switch (type) {
    case actions.DISABLED_BUTTON:
      return value;
    default:
      return state;
  }
};
const clickedButtons = (state = 0, { type, value }) => {
  switch (type) {
    case actions.CLICKED_BUTTON:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  clickedButtonValue,
  demoReducer,
  setQuestion,
  questionCount,
  submitAnswer,
  partiallyCorrect,
  submitButtonPressed,
  submitAnswer,
  wrongAnswer,
  answerCorrect,
  selectedButton,
  selectedAnswerOption,
  questionVisited,
  disabledButton,
  clickedButtons,
  ...reducers,
});
