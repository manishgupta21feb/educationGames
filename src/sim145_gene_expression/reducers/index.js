import * as actions from "../actions";
import reducers from "../../app/reducers";
import { combineReducers } from "redux";

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

const accessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};

const setDraggable = (state = "", { type, dragValue }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_VALUE:
      return dragValue;
    default:
      return state;
  }
};

const setDroppable = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPPABLE_CHNAGE_STATE:
      return value;
    case actions.RESET_DROPPABLE_STATE:
      return state;
    default:
      return state;
  }
};

const matchedItems = (state = [], { drag, drop, type, items }) => {
  switch (type) {
    case actions.SET_ITEMS_MATCHED:
      return [...state, { drag: { ...drag }, drop: { ...drop } }];
    case actions.UPDATE_ITEMS_MATCHED:
      return items;
    default:
      return state;
  }
};

const sim145CurrentScreen = (state = "first", { type, val }) => {
  switch (type) {
    case actions.SET_CURRENT_SCREEN:
      return val;
    default:
      return state;
  }
};

const lastScreenPart = (state = "first", { type, val }) => {
  switch (type) {
    case actions.UPDATE_LAST_SCREEN:
      return val;
    default:
      return state;
  }
};

const hideCheckButton = (state = false, { type, val }) => {
  switch (type) {
    case actions.HIDE_CHECK_BUTTON:
      return val;
    default:
      return state;
  }
};

const alligatorsArray = (state = [], { type, val }) => {
  switch (type) {
    case actions.UPDATE_ALLIGATOR_ARRAY:
      return val;
    default:
      return state;
  }
};

const zindexStatus = (state = false, action) => {
  switch (action.type) {
    case actions.SET_ZINDEX_STATUS:
      return action.status;
    default:
      return state;
  }
};

const isPartiallyCorrect = (state = false, action) => {
  switch (action.type) {
    case actions.IS_PARTIALLY_CORRECT:
      return action.status;
    default:
      return state;
  }
};

export default combineReducers({
  accessibleListVisible,
  setDraggable,
  setDroppable,
  submitButtonPressed,
  wrongAnswer,
  matchedItems,
  sim145CurrentScreen,
  lastScreenPart,
  hideCheckButton,
  alligatorsArray,
  zindexStatus,
  isPartiallyCorrect,
  ...reducers,
});
