import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "./../data";
const initialState = {
  questionNumber: 0,
  questionIndex: 0,
  questionCount: 0,
}

const questionsData = (
  state = data.hotspots.map((q) => ({ ...q })),
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
      return data.hotspots[value];
    default:
      return state;
  }
};

export const questionCountReducer = (
  state = initialState.questionCount,
  { type, value }
) => {
  switch (type) {
    case actions.QUESTION_COUNT:
      return value;

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

const questionIndexReducer = (
  state = initialState.questionIndex,
  { type, value }
) => {
  switch (type) {
    case actions.QUESTION_INDEX:
      return value;

    default:
      return state;
  }
};

const currentOptionState = (state = "", { type, selection }) => {
  switch (type) {
    case actions.CURRENT_OPTION:
      return selection;
    default:
      return state;
  }
};

export const getAttempts = (state = 0, { type, value }) => {
  switch (type) {
    case actions.ATTEMPTS:
      return value;
    default:
      return state;
  }
};

const questionNumberReducer = (
  state = initialState.questionNumber,
  { type, value }
) => {
  switch (type) {
    case actions.QUESTION_NUMBER:
      return value;

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



const hotspots = (state = data.hotspots, action) => {
  switch (action.type) {
    case actions.HOTSPOTS:
      return action.payload;
    case actions.UPDATE_VISITED_HOTSPOTS:
      return action.payload;
    default:
      return state;
  }
};
const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.payload;
    default:
      return state;
  }
};
export const getSelectedOption = (state = "", { type, value }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return value;
    default:
      return state;
  }
};

export const getSubmitBtnVisibility = (state = false, { type, value }) => {
  switch (type) {
    case actions.SUBMIT_BTN_VISIBILITY:
      return value;
    default:
      return state;
  }
};

const isVideoVisible = (state = false, action) => {
  switch (action.type) {
    case actions.SHOW_VIDEO_DATA:
      return action.payload;
    default:
      return state;
  }
};
const isVideoEnded = (state = false, action) => {
  switch (action.type) {
    case actions.VIDEO_ENDED:
      return action.payload;
    default:
      return state;
  }
};
const screenNumber = (state = 1, action) => {
  switch (action.type) {
    case actions.GET_SCREEN:
      return action.payload;
    default:
      return state;
  }
};

const accessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};


const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  hotspots,
  questionsData,
  questionCountReducer,
  currentOptionState,
  selectedQuestion,
  selectQuestionIndex,
  selectedAnswerOption,
  questionIndexReducer,
  questionNumberReducer,
  answerSubmitted,
  submittedAnswer,
  getSelectedOption,
  getAttempts,
  getSubmitBtnVisibility,
  selectedHotspot,
  isVideoVisible,
  isVideoEnded,
  screenNumber,
  accessibleListVisible,
  toastMsg,
  ...reducers,
});
