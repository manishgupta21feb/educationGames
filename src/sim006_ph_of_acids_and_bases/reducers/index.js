import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

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

export default combineReducers({
  showNext,
  toastMsg,
  dropElement,
  elementData,
  selectedStage,
  simulationEnd,
  updateAttempt,
  accessibleListVisible,
  ...reducers,
});
