import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

const selectedYear = (state = 200, action) => {
  switch (action.type) {
    case actions.SELECTED_YEAR:
      return action.val;
    default:
      return state;
  }
};

const continentData = (state = [...data.continentData], action) => {
  switch (action.type) {
    case actions.CONTINENT_DATA:
      return action.val;
    default:
      return state;
  }
};

const showSidePanelPlates = (state = false, action) => {
  switch (action.type) {
    case actions.SIDE_PANNEL_PLATES:
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
const yearPlatesCount = (state = { ...data.yearPlatesCount }, action) => {
  switch (action.type) {
    case actions.YEAR_PLATES_COUNT:
      return action.val;
    default:
      return state;
  }
};
const mapCompleted = (state = { ...data.mapCompleted }, action) => {
  switch (action.type) {
    case actions.MAP_COMPLETED:
      return action.val;
    default:
      return state;
  }
};
const canvasData = (state = { ...data.canvasData }, action) => {
  switch (action.type) {
    case actions.CANVAS_DATA:
      return action.val;
    default:
      return state;
  }
};

const setFinalDialogMsg = (state = "", action) => {
  switch (action.type) {
    case actions.SET_FINAL_DIALOG_MSG:
      return action.val;
    default:
      return state;
  }
};

const resetYesClicked = (state = false, action) => {
  switch (action.type) {
    case actions.RESET_YES_BUTTON:
      return action.val;
    default:
      return state;
  }
};

const droppedPlates = (
  state = { 200: [], 150: [], 100: [] },
  { type, country, year }
) => {
  switch (type) {
    case actions.UPDATE_DROPPED_PLATE:
      const _state = { ...state };
      _state[year] = [..._state[year], country];
      return _state;
    case actions.RESET_DROPPED_PLATE:
      return {
        100: [],
        150: [],
        200: [],
      };
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  canvasData,
  selectedYear,
  mapCompleted,
  droppedPlates,
  continentData,
  yearPlatesCount,
  resetYesClicked,
  setFinalDialogMsg,
  showSidePanelPlates,
  ...reducers,
});
