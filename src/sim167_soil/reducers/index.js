import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const getCurrentLocation = (state = "launch", { type, loc }) => {
  switch (type) {
    case actions.CURRENT_SECTION:
      return loc;
    default:
      return state;
  }
};

const getCurrentSoil = (state = 0, { type, soil }) => {
  switch (type) {
    case actions.CURRENT_SOIL:
      return soil;
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
export const getDragData = (state = [...data.dragObjects], { type, value }) => {
  switch (type) {
    case actions.DRAG_DATA:
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
const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};
const getCurrentDraggable = (state = "", { type, val }) => {
  switch (type) {
    case actions.CURRENT_DRAGGABLE:
      return val;
    default:
      return state;
  }
};
const getSoilViewData = (state = [0, 0, 0], { type, val }) => {
  switch (type) {
    case actions.SOIL_VIEW_DATA:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  getDragData,
  getCurrentLocation,
  getCurrentSoil,
  getTotalStrength,
  getDropZones,
  getAccessibleListVisible,
  toastMsg,
  getCurrentDraggable,
  getSoilViewData,
  ...reducers,
});
