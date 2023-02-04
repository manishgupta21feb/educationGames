import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data/index";
const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.id;
    default:
      return state;
  }
};
const driveClicked = (state = 0, action) => {
  switch (action.type) {
    case actions.DRIVE_BUTTON_CLICKED:
      return action.value;
    default:
      return state;
  }
};

const setVisitedData = (state = [], { type, val }) => {
  switch (type) {
    case actions.VISITED_HOTSPOT:
      return [...state, val];
    case actions.RESET_VISITED_HOTSPOT:
      return [];
    default:
      return state;
  }
};

const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
    default:
      return state;
  }
};
const resetFocusState = (state = false, { type, focus }) => {
  switch (type) {
    case actions.common.SET_RESET_FOCUS_STATE:
      return focus;
    default:
      return state;
  }
};

const observationsData = (
  state = JSON.parse(JSON.stringify(data.observationsData)),
  action
) => {
  switch (action.type) {
    case actions.OBSERVATIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const firstcarvscarVisited = (state = false, { type, value }) => {
  switch (type) {
    case actions.FIRST_CAR_VS_CAR_VISITED:
      return value;
    default:
      return state;
  }
};
const sliderClicked = (state = false, action) => {
  switch (action.type) {
    case actions.SLIDER_CLICKED:
      return action.value;
    default:
      return state;
  }
};
const sliderOneValue = (state = 0, action) => {
  switch (action.type) {
    case actions.SLIDER_ONE_VALUE:
      return action.value;
    default:
      return state;
  }
};
const sliderTwoValue = (state = 0, action) => {
  switch (action.type) {
    case actions.SLIDER_TWO_VALUE:
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  observationsData,
  startActivity,
  resetFocusState,
  firstcarvscarVisited,
  selectedHotspot,
  setVisitedData,
  sliderTwoValue,
  sliderOneValue,
  sliderClicked,
  driveClicked,
  ...reducers,
});
