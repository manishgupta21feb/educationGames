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
const setScreenValue = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SET_SCREEN:
      return value;
    default:
      return state;
  }
};
const mcqScreenValue = (state = false, { type, value }) => {
  switch (type) {
    case actions.MCQ_SCREEN:
      return value;
    default:
      return state;
  }
};
const scenerioCountValue = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SCENERIO_COUNT:
      return value;
    default:
      return state;
  }
};
const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER:
      return id;
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
const submitButtonPressed = (state = false, { type, pressed }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON_PRESSED:
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
const buttonClickCount = (state = 0, { type, value }) => {
  switch (type) {
    case actions.BUTTON_CLICK_COUNT:
      return value;
    default:
      return state;
  }
};
export default combineReducers({
  demoReducer,
  setScreenValue,
  mcqScreenValue,
  scenerioCountValue,
  selectedAnswerOption,
  submitAnswer,
  submitButtonPressed,
  wrongAnswer,
  buttonClickCount,
  ...reducers,
});
