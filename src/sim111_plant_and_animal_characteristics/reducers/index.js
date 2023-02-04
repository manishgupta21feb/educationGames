import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

const draggableList = (state = [], { data, type }) => {
  switch (type) {
    case actions.ADD_DRAGGABLE_ITEM:
      return [...state, data];
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

const isAccessible = (state = false, { type, accessible }) => {
  switch (type) {
    case actions.IS_ACCESSIBLE:
      return accessible;
    default:
      return state;
  }
};

const droppedItems = (state = [], { type, droppedId }) => {
  switch (type) {
    case actions.ADD_DROPPED_ITEM:
      if (state.indexOf(droppedId) == -1) {
        return [...state, droppedId];
      }
      return state;
    case actions.RESET_DROPPED_ITEMS:
      return [];
    default:
      return state;
  }
};

const activityCompleted = (state = false, { type, completed }) => {
  switch (type) {
    case actions.SET_ACTIVITY_COMPLETED:
      return completed;
    default:
      return state;
  }
};

const firstActivityCompleted = (state = false, { type, val }) => {
  switch (type) {
    case actions.SET_FIRST_ACTIVITY_COMPLETED:
      return val;
    default:
      return state;
  }
};

const monekeydraggables = (
  state = data.monekeydraggables.map((d) => ({ ...d })),
  action
) => {
  switch (action.type) {
    case actions.SET_MONEKY_DRAGGABLES:
      return action.monekeydraggables;
    default:
      return state;
  }
};

const treedraggables = (
  state = data.treeDragable.map((d) => ({ ...d })),
  action
) => {
  switch (action.type) {
    case actions.SET_TREE_DRAGGABLES:
      return action.treeDragable;
    default:
      return state;
  }
};

const monkeyDropzones = (
  state = data.monkeyDropzones.map((d) => ({ ...d })),
  { type, items }
) => {
  switch (type) {
    case actions.UPDATE_MONKEYS_DROPZONES:
      return items;
    case actions.RESET_MONKEYS_DROPZONES:
      return data.monkeyDropzones.map((d) => ({ ...d }));
    default:
      return state;
  }
};

const treeDropzones = (
  state = data.treeDropzones.map((d) => ({ ...d })),
  { type, items }
) => {
  switch (type) {
    case actions.UPDATE_TREES_DROPZONES:
      return items;
    case actions.RESET_TREES_DROPZONES:
      return data.treeDropzones.map((d) => ({ ...d }));
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

const isSecondScreenEnable = (state = false, { type, val }) => {
  switch (type) {
    case actions.UPDATE_SECOND_SCREEN_ENABILITY:
      return val;
    default:
      return state;
  }
};

const correctDropInformation = (state = "", { type, text }) => {
  switch (type) {
    case actions.SET_CORRECT_DROP_INFO:
      return text;
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

const leftImgAria = (state = "", action) => {
  switch (action.type) {
    case actions.UPDATE_ARIA_LEVEL:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  isAccessible,
  droppedItems,
  draggableList,
  monekeydraggables,
  selectedDraggable,
  activityCompleted,
  monkeyDropzones,
  treeDropzones,
  matchedItems,
  isSecondScreenEnable,
  treedraggables,
  firstActivityCompleted,
  correctDropInformation,
  zindexStatus,
  leftImgAria,
  ...reducers,
});
