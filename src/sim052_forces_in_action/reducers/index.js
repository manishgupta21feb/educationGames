import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

export const getActivityStarted = (state = false, { type, value }) => {
  switch (type) {
    case actions.LEVEL_ONE:
      return value;

    default:
      return state;
  }
};

export const getUpdateSlider = (state = 0, { type, value }) => {
  switch (type) {
    case actions.UPDATED_SLIDER:
      return value;
    default:
      return state;
  }
};

export const getLevel = (state = 0, { type, value }) => {
  switch (type) {
    case actions.LEVEL:
      return value;
    default:
      return state;
  }
};

export const getViewPlayed = (state = [], { type, value }) => {
  switch (type) {
    case actions.VIEW_PLAYED:
      if (!state.includes(value) && !Array.isArray(value)) {
        let _refinedState = [...state];
        _refinedState.push(value);
        state = _refinedState;
        return state;
      } else if (Array.isArray(value)) {
        let emptyArray = [...state];
        emptyArray = new Array();
        state = emptyArray;
        return state;
      }
    default:
      return state;
  }
};

export const getDragData = (state = [...data.dragObjects], { type, value }) => {
  switch (type) {
    case actions.DRAG_DATA:
      return value;
    default:
      return state;
  }
};

export const getDroppedItems = (state = {}, { type, value }) => {
  switch (type) {
    case actions.DROPPED_ITEMS:
      return value;
    default:
      return state;
  }
};
export const getTotalStrength = (state = [], { type, value }) => {
  switch (type) {
    case actions.TOTAL_STRENGTH:
      return value;
    default:
      return state;
  }
};
export const getCurrentVideo = (state = 0, { type, value }) => {
  switch (type) {
    case actions.CURRENT_VIDEO:
      return value;
    default:
      return state;
  }
};
export const getForceBegin = (state = false, { type, value }) => {
  switch (type) {
    case actions.START_TUG_WAR:
      return value;
    default:
      return state;
  }
};
export const getVideoEnded = (state = false, { type, value }) => {
  switch (type) {
    case actions.VIDEO_ENDED:
      return value;
    default:
      return state;
  }
};
export const getDropZones = (
  state = [...data.dropObjects],
  { type, value }
) => {
  switch (type) {
    case actions.DROP_ZONES:
      return value;
    default:
      return state;
  }
};
const getAccessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};
const getCurrentDraggable = (state = "", { type, val }) => {
  switch (type) {
    case actions.CURRENT_DRAG:
      return val;
    default:
      return state;
  }
};

const getData = (state = (state = { ...data }), { type, val }) => {
  switch (type) {
    case actions.SIM_DATA:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  getActivityStarted,
  getUpdateSlider,
  getLevel,
  getViewPlayed,
  getDragData,
  getDroppedItems,
  getTotalStrength,
  getCurrentVideo,
  getForceBegin,
  getVideoEnded,
  getAccessibleListVisible,
  getDropZones,
  getCurrentDraggable,
  getData,
  ...reducers,
});
