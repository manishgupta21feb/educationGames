import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from '../data';

const draggableItems = (state = data.draggables, action) => {
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

const selectedGlass = (state = "blank-glass", action) => {
  switch (action.type) {
    case actions.SET_GLASS:
      return action.glassType;
    default:
      return state;
  }
};

const isDropped = (state = false, action) => {
  switch (action.type) {
    case actions.SET_IS_DROPPED:
      return action.value;
    default:
      return state;
  }
};

const timerStatus = (state = true, action) => {
  switch (action.type) {
    case actions.SET_TIMER_STATUS:
      return action.status;
    default:
      return state;
  }
};

const isNext = (state = false, action) => {
  switch (action.type) {
    case actions.SET_IS_NEXT:
      return action.status;
    default:
      return state;
  }
};

const activityStarted = (state = false, action) => {
  switch (action.type) {
    case actions.SET_START_ACTIVITY:
      return action.status;
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

const zindexStatus = (state = false, action) => {
  switch (action.type) {
    case actions.SET_ZINDEX_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default combineReducers({
  draggableItems,
  selectedDraggable,
  selectedGlass,
  isDropped,
  timerStatus,
  isNext,
  activityStarted,
  accessibleListVisible,
  zindexStatus,
  ...reducers,
});
