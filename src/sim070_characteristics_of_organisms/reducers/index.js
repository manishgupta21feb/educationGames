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

const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECTED_ANSWER:
      return id;
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

const secondScreen = (state = false, { type, value }) => {
  switch (type) {
    case actions.SECOND_SCREEN:
      return value;
    default:
      return state;
  }
};

const buttonIndex = (state = 0, { type, value }) => {
  switch (type) {
    case actions.BUTTON_INDEX:
      return value;
    default:
      return state;
  }
};
const specimenClicked = (state = false, { type, value }) => {
  switch (type) {
    case actions.SPECIMEN_CLICKED:
      return value;
    default:
      return state;
  }
};
const specimenValue = (state = "", { type, value }) => {
  switch (type) {
    case actions.SPECIMEN_VALUE:
      return value;
    default:
      return state;
  }
};

const microscopicClickView = (state = false, { type, value }) => {
  switch (type) {
    case actions.MICROSCOPIC_CLICK_VIEW:
      return value;
    default:
      return state;
  }
};
const isMcqShow = (state = false, { type, value }) => {
  switch (type) {
    case actions.IS_MCQ_SHOW:
      return value;
    default:
      return state;
  }
};
const questionAttempt = (state = 1, { type, value }) => {
  switch (type) {
    case actions.QUESTION_VISITED:
      return value;
    default:
      return state;
  }
};

const specimenVisited = (state = [], { type, value }) => {
  switch (type) {
    case actions.SPECIMEN_VISITED:
      return [...state, value];
    case actions.RESET_BUTTON_CLICKED:
      return [];
    default:
      return state;
  }
};
export default combineReducers({
  wrongAnswer,
  submitAnswer,
  demoReducer,
  submitButtonPressed,
  setQuestion,
  selectedAnswerOption,
  questionCount,
  secondScreen,
  buttonIndex,
  specimenClicked,
  specimenValue,
  microscopicClickView,
  isMcqShow,
  specimenVisited,
  questionAttempt,
  ...reducers,
});
