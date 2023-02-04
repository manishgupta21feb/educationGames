import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const tincanActivityCompleted =
  (TincanManager.data && TincanManager.data.completed) || false;

const elementData = (
  state = data.elementData.map((e) => ({ ...e })),
  action
) => {
  switch (action.type) {
    case actions.ELEMENT_DATA:
      return action.val;
    default:
      return state;
  }
};

const dropElement = (state = {}, action) => {
  switch (action.type) {
    case actions.DROP_ELEMENT:
      return action.val;
    default:
      return state;
  }
};

const updateAttempt = (state = [], action) => {
  switch (action.type) {
    case actions.UPDATE_ATTEMPT:
      return action.val;
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

const periodicTableCellAriaLabel = (
  state = { ...data.periodicTableData },
  { type, val }
) => {
  switch (type) {
    case actions.TABLE_CELL_ARIA_LABEL:
      return val;
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

const activityCompleted = (state = tincanActivityCompleted, { type }) => {
  switch (type) {
    case actions.ACTIVITY_COMPLETED:
      return true;
    case actions.RESET_ACTIVITY_COMPLETED:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  dropElement,
  elementData,
  updateAttempt,
  simulationEnd,
  activityCompleted,
  accessibleListVisible,
  periodicTableCellAriaLabel,
  ...reducers,
});
