import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const selectedHotspot = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_HOTSPOT:
      return id;
    default:
      return state;
  }
};

const visitedHotSpot = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.UPDATE_VISITED_HOTSPOT:
      return [...state, hotspot];
    case actions.RESET_VISITED_HOTSPOTS:
      return [];
    default:
      return state;
  }
};

const answerAttempted = (state = false, { type, attempt }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPT:
      return attempt;
    default:
      return state;
  }
};

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const nextButtonClickState = (state = false, { type, status }) => {
  switch (type) {
    case actions.SET_NEXT_BUTTON_CLICK_STATE:
      return status;
    default:
      return state;
  }
};

const screenStatus = (state = 1, { type, status }) => {
  switch (type) {
    case actions.SET_SCREEN_STATUS:
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
};

const selectedDraggable = (state = {}, { type, data }) => {
  switch (type) {
    case actions.SELECT_DRAGGABLE:
      return data;
    default:
      return state;
  }
};

const droppedItems = (state = [], { type, item }) => {
  switch (type) {
    case actions.SET_DROPPED_ITEM:
      return [...state, { ...item }];
    case actions.UPDATE_DROPPED_ITEM:
      return item;
    default:
      return state;
  }
};

const screen4CorrectAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.SCREEN4_CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const screen6CorrectAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.SCREEN6_CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const accessibleListVisible = (state = false, action) => {
  switch (action.type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return action.status;
    default:
      return state;
  }
};

const screen4Dropzones = (state = [], action) => {
  switch (action.type) {
    case actions.SET_SCREEN4_DROPZONES:
      return action.dropzone;
    default:
      return state;
  }
};

const screen6Dropzones = (state = [], action) => {
  switch (action.type) {
    case actions.SET_SCREEN6_DROPZONES:
      return action.dropzone;
    default:
      return state;
  }
};

const zIndexStatus = (state = false, action) => {
  switch (action.type) {
    case actions.SET_ZINDEX_STATUS:
      return action.status;
    default:
      return state;
  }
};

const dropzoneStatus = (state = true, action) => {
  switch (action.type) {
    case actions.SET_DROPZONE_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default combineReducers({
  selectedHotspot,
  visitedHotSpot,
  nextButtonClickState,
  screenStatus,
  answerAttempted,
  correctAnswer,
  selectedOption,
  selectedDraggable,
  droppedItems,
  screen4CorrectAnswer,
  accessibleListVisible,
  screen4Dropzones,
  screen6CorrectAnswer,
  zIndexStatus,
  dropzoneStatus,
  screen6Dropzones,
  ...reducers,
});
