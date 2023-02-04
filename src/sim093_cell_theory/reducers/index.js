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

const isMcqShow = (state = false, { type, value }) => {
  switch (type) {
    case actions.IS_MCQ_SHOW:
      return value;
    default:
      return state;
  }
};

const ostCountNumber = (state = 1, { type, value }) => {
  switch (type) {
    case actions.OST_COUNT:
      return value;
    default:
      return state;
  }
};

const screenNumber = (state = 1, { type, value }) => {
  switch (type) {
    case actions.SCREEN_NUMBER:
      return value;
    default:
      return state;
  }
};

const visitedButton = (state = [], { type, value }) => {
  switch (type) {
    case actions.ATTEMPTED_BUTTON:
      const indexVal = state.indexOf(value);
      if (indexVal == -1) {
        const _state = [...state, value];
        return _state;
      }
      return state;
    case actions.CLEAR_VISITED_BUTTONS:
      return [];
    default:
      return state;
  }
};

const knobsHidden = (state = false, { type, value }) => {
  switch (type) {
    case actions.HIDE_MAGNIFICATION_KNOBS:
      return value;
    default:
      return state;
  }
};

const specimenHidden = (state = false, { type, value }) => {
  switch (type) {
    case actions.HIDE_SPECIMEN:
      return value;
    default:
      return state;
  }
};

const continueBtnDisabled = (state = false, { type, value }) => {
  switch (type) {
    case actions.DISABLE_CONTINUE_BUTTON:
      return value;
    default:
      return state;
  }
};

const isVideoEnded = (state = false, { type, value }) => {
  switch (type) {
    case actions.VIDEO_ENDED:
      return value;
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
  isMcqShow,
  ostCountNumber,
  screenNumber,
  visitedButton,
  knobsHidden,
  specimenHidden,
  continueBtnDisabled,
  isVideoEnded,
  ...reducers,
});
