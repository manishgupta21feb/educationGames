import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

const selectedStage = (state = "stage1", action) => {
  switch (action.type) {
    case actions.UPDATE_STAGE:
      return action.val;
    default:
      return state;
  }
};

const elementData = (state = [...data.stage1.elements], action) => {
  switch (action.type) {
    case actions.ELEMENT_DATA:
      return action.val;
    default:
      return state;
  }
};

const updateAttempt = (state = 0, action) => {
  switch (action.type) {
    case actions.UPDATE_ATTEMPT:
      return state + 1;
    default:
      return state;
  }
};

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
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

const simulationEnd = (state = false, action) => {
  switch (action.type) {
    case actions.SIMULATION_END:
      return action.val;
    default:
      return state;
  }
};

const showNext = (state = false, action) => {
  switch (action.type) {
    case actions.UPDATE_SHOW_NEXT:
      return action.val;
    default:
      return state;
  }
};

const dropElement = (state = [], action) => {
  switch (action.type) {
    case actions.DROP_ELEMENT:
      return [action.val, ...state];
    case actions.EMPTY_DROPPED_ELEMENTS:
      return [];
    default:
      return state;
  }
};

const matchedItems = (
  state = { prokaryotic: [], both: [], eukaryotic: [] },
  action
) => {
  switch (action.type) {
    case actions.ADD_MATCHED_ITEM:
      const { target, value } = action.item;
      const check = state[target].find((e) => e.text == value);
      if (!check) {
        const temp = { ...state };
        temp[action.item.target] = [
          ...temp[action.item.target],
          {
            id: value.toLowerCase().split(" ").join("_"),
            text: value,
          },
        ];
        return temp;
      }
      return state;

    case actions.RESET_MATCHED_ITEMS:
      return { prokaryotic: [], both: [], eukaryotic: [] };
    default:
      return state;
  }
};

const selectedDraggable = (state = null, action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE:
      if (action.val) {
        return { ...action.val };
      }
      return action.val;
    default:
      return state;
  }
};

const droppedMatched = (state = false, { type, matched }) => {
  switch (type) {
    case actions.SET_DROPPED_MATCHED:
      return matched;
    default:
      return state;
  }
};

export const countAttempts = (state = 1, { type, value }) => {
  switch (type) {
    case actions.COUNT_ATTEMPTS:
      return value;
    default:
      return state;
  }
};
export const activityCompleted = (state = false, { type, completed }) => {
  switch (type) {
    case actions.SET_ACTIVITY_COMPLETED:
      return completed;
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  showNext,
  dropElement,
  elementData,
  matchedItems,
  updateAttempt,
  selectedStage,
  simulationEnd,
  droppedMatched,
  selectedDraggable,
  accessibleListVisible,
  countAttempts,
  activityCompleted,
  ...reducers,
});
