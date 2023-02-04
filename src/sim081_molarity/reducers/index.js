import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import _data from "../data";
import data from "../data";

const getIsVideoEnd = (state = false, action) => {
  switch (action.type) {
    case actions.IS_VIDEO_END:
      return action.val;
    default:
      return state;
  }
};

const getIsVideoPause = (state = false, action) => {
  switch (action.type) {
    case actions.IS_VIDEO_PAUSE:
      return action.params;
    default:
      return state;
  }
};

const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
    default:
      return state;
  }
};

export const selectedQuestion = (state = "", { type, item }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return item;
    default:
      return state;
  }
};

export const correctAttempt = (state = "", { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ATTEMPT:
      return correct;
    default:
      return state;
  }
};

export const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.SELECT_CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

export const answerSubmitted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return attempted;
    default:
      return state;
  }
};

export const stepperValue = (state = 0, { type, attempted }) => {
  switch (type) {
    case actions.STEPPER_VALUE:
      return attempted;
    default:
      return state;
  }
};

export const videoPlayState = (state = false, { type, item }) => {
  switch (type) {
    case actions.VIDEO_PLAY_STATE:
      return item;
    default:
      return state;
  }
};

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
      case actions.RESET_QUESTIONS_DATA:
        return 1;   
    default:
      return state;
  }
};

const questionsData = (state = [..._data.molerityData], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    case actions.RESET_QUESTIONS_DATA:
      return [..._data.molerityData];
    default:
      return state;
  }
};


export const resetCounterValues = (state = false, { type, value }) => {
  switch (type) {
    case actions.RESET_COUNTER:
      return value;
    default:
      return state;
  }
};

export const resetBtnState = (state = true, action) => {
  switch (action.type) {
    case actions.SET_RESET_BUTTON_STATE:
      return action.val;
    default:
      return state;
  }
};

const partiallyCorrect = (state = false, { type, correct }) => {
  switch (type) {
    case actions.SET_PARTIALLY_CORRECT:
      return correct;
    default:
      return state;
  }
};

const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

export default combineReducers({
  startActivity,
  selectedQuestion,
  correctAttempt,
  partiallyCorrect,
  submittedAnswer,
  answerSubmitted,
  stepperValue,
  videoPlayState,
  questionCount,
  questionsData,
  resetCounterValues,
  resetBtnState,
  selectedAnswerOption,
  getIsVideoPause,
  getIsVideoEnd,
  ...reducers,
});
