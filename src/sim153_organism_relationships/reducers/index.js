import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const resetFocusState = (state = false, { type, focus }) => {
  switch (type) {
    case actions.common.SET_RESET_FOCUS_STATE:
      return focus;
    default:
      return state;
  }
};

const getDNDHeading = (state = 0, { type, params }) => {
  switch (type) {
    case actions.DND_HEADING:
      return params;
    default:
      return state;
  }
};

const questionsData = (state = [...data.equationsData], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};
const setRadio = (state = 0, action) => {
  switch (action.type) {
    case actions.SET_RADIO:
      return action.count;
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

const submitAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.SUBMIT_ANSWER:
      return answer;
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

const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return { ...question };
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
const dndShow = (state = false, { type, value }) => {
  switch (type) {
    case actions.IS_DND_SHOW:
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

const selectedDraggable = (state = {}, action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE:
      return action.data;
    default:
      return state;
  }
};

const accessibleListValue = (state = false, action) => {
  switch (action.type) {
    case actions.ACCESSIBLE_LIST:
      return action.value;
    default:
      return state;
  }
};
const matchedItems = (state = [], { type, item }) => {
  switch (type) {
    case actions.ADD_MATCHED_ITEM:
      return [...state, { ...item }];
    case actions.RESET_MATCHED_ITEMS:
      return [];
    default:
      return state;
  }
};
const dropzones = (state = data.dropzoneArea, { type, items }) => {
  switch (type) {
    case actions.UPDATE_DROPZONES:
      return items;
    case actions.RESET_DROPZONES:
      return data.dropzoneArea;
    default:
      return state;
  }
};
const clickCount = (state = 0, action) => {
  switch (action.type) {
    case actions.CLICK_COUNT:
      return action.count;
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
  setRadio,
  resetFocusState,
  wrongAnswer,
  submitAnswer,
  questionsData,
  questionCount,
  selectedQuestion,
  submitButtonPressed,
  selectedAnswerOption,
  dndShow,
  secondScreen,
  matchedItems,
  accessibleListValue,
  selectedDraggable,
  dropzones,
  clickCount,
  showResponse,
  descriptionBoxShow,
  getDNDHeading,

  ...reducers,
});
