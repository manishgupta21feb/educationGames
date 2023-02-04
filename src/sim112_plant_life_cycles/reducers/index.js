import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import data from "../data";

const selectedDraggable = (state = {}, action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE:
      return action.data;
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

const accessibleListValue = (state = false, action) => {
  switch (action.type) {
    case actions.ACCESSIBLE_LIST:
      return action.value;
    default:
      return state;
  }
};
const scenerioVisitedValue = (state = 0, action) => {
  switch (action.type) {
    case actions.SCENERIO_VISITED:
      return action.value;
    default:
      return state;
  }
};
const secondScreenValue = (state = false, action) => {
  switch (action.type) {
    case actions.SECOND_SCRREN:
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

const dropzones = (
  state = data.droppableScreen1[0].dropItem.map((d) => ({ ...d })),
  { type, items }
) => {
  switch (type) {
    case actions.UPDATE_DROPZONES:
      return items;
    case actions.RESET_DROPZONES:
      return data.droppableScreen1[0].dropItem.map((d) => ({
        ...d,
        hidden: false,
      }));
    default:
      return state;
  }
};
const dropzonesScreen2 = (
  state = data.droppableScreen2[0].dropItem.map((d) => ({ ...d })),
  { type, items }
) => {
  switch (type) {
    case actions.UPDATE_SECOND_DROPZONES:
      return items;
    case actions.RESET_SECOND_DROPZONES:
      return data.droppableScreen2[0].dropItem.map((d) => ({ ...d }));
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
const completedActivityValue = (state = 1, action) => {
  switch (action.type) {
    case actions.COMPLETED_ACTIVITY:
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  dropzones,
  matchedItems,
  selectedDraggable,
  accessibleListValue,
  scenerioVisitedValue,
  secondScreenValue,
  dropzonesScreen2,
  submitAnswer,
  submitButtonPressed,
  wrongAnswer,
  zindexStatus,
  completedActivityValue,
  ...reducers,
});
