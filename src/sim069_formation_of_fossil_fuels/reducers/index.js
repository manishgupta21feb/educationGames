import * as actions from "../actions";
import data from "../data";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

export const getOperatablesData = (
  state = data.operatables,
  { type, item }
) => {
  switch (type) {
    case actions.OPERATABLES_DATA:
      return item;

    default:
      return state;
  }
};

const getPlacementZones = (
  state = data.placements.map((q) => ({ ...q })),
  { type, items }
) => {
  switch (type) {
    case actions.RESET_PLACEMENT_ZONES:
      return data.placements.map((q) => ({ ...q }));
    case actions.UPDATE_PLACEMENT_ZONES:
      return items;
    default:
      return state;
  }
};

const getCurrentOperatable = (state = null, { type, val }) => {
  switch (type) {
    case actions.CURRENT_OPERATABLE:
      return val;
    default:
      return state;
  }
};

const getAccept = (state = "", { type, val }) => {
  switch (type) {
    case actions.ACCEPT:
      return val;
    default:
      return state;
  }
};

const getResult = (state = false, { type, val }) => {
  switch (type) {
    case actions.RESULT:
      return val;
    default:
      return state;
  }
};

const getFossil = (state = "", { type, val }) => {
  switch (type) {
    case actions.FOSSIL:
      return val;
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

const getActivityEnd = (state = false, { type }) => {
  switch (type) {
    case actions.ACTIVITY_END:
      return !state;
    default:
      return state;
  }
};
const getToggleDesciptionBox = (state = false, { type }) => {
  switch (type) {
    case actions.TOGGLE_DESCRIPTION_BOX:
      return !state;
    default:
      return state;
  }
};

export const getViewPlayed = (state = [], { type, value }) => {
  switch (type) {
    case actions.VIEW_PLAYED:
      if (!state.includes(value)) {
        return [...state, value];
      }
    default:
      return state;
  }
};

const droppedItem = (state = null, { type, item }) => {
  switch (type) {
    case actions.SET_DROPPED_ITEM:
      return item;
    default:
      return state;
  }
};

export default combineReducers({
  getOperatablesData,
  getPlacementZones,
  getCurrentOperatable,
  getResult,
  getAccept,
  getFossil,
  getAccessibleListVisible,
  getActivityEnd,
  getViewPlayed,
  getToggleDesciptionBox,
  droppedItem,
  ...reducers,
});
