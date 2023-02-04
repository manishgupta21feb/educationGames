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
const selectedTimeline = (state = 0, action) => {
  switch (action.type) {
    case actions.UPDATE_SLIDER:
      return action.payload;
    default:
      return state;
  }
};
const mcqShow = (state = false, { type, value }) => {
  switch (type) {
    case actions.IS_MCQ_SHOW:
      return value;
    default:
      return state;
  }
};
const secondScreen = (state = false, { type, id }) => {
  switch (type) {
    case actions.SECOND_SCREEN:
      return id;
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
const isSliderDisabled = (state = true, { type, val }) => {
  switch (type) {
    case actions.SLIDER_DISABLED:
      return val;
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
const descriptionBoxShow = (state = false, { type, value }) => {
  switch (type) {
    case actions.DESCRIPTION_BOX_SHOW:
      return value;
    default:
      return state;
  }
};
const showResponse = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_RESPONSE:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  demoReducer,
  mcqShow,
  secondScreen,
  selectedAnswerOption,
  submitAnswer,
  wrongAnswer,
  submitButtonPressed,
  descriptionBoxShow,
  showResponse,
  selectedTimeline,
  isSliderDisabled,
  ...reducers,
});
