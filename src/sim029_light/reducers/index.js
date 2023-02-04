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

const draggableItems = (
  state = data.draggables.map((d) => ({ ...d })),
  action
) => {
  switch (action.type) {
    case actions.SET_DRAGGABLES:
      return action.draggables;
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

const activeDropzone = (state = data.dropzones[0].id, { type, dropzone }) => {
  switch (type) {
    case actions.SET_ACTIVE_DROPZONE:
      return dropzone;
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

export default combineReducers({
  toastMsg,
  isAccessible,
  droppedItems,
  draggableList,
  draggableItems,
  activeDropzone,
  selectedDraggable,
  activityCompleted,
  ...reducers,
});
