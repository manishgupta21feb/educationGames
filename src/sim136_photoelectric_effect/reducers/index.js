import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const selectedWavelength = (state = 1, { type, wavelength }) => {
  switch (type) {
    case actions.CHANGE_WAVE_LENGTH:
      return wavelength;
    default:
      return state;
  }
};

const animationState = (state = false, { type, animation }) => {
  switch (type) {
    case actions.PLAY_ANIMATION:
      return animation;
    default:
      return state;
  }
};
const spectrumValue = (state = [], { type, spectrum }) => {
  switch (type) {
    case actions.ADD_SPECTRUM:
      return [...new Set([...state, spectrum])];
    case actions.RESET_SPECTRUM:
      return [];
    default:
      return state;
  }
};

const tripCount = (state = 1, { type, trip }) => {
  switch (type) {
    case actions.TRIP_UPDATE:
      return trip;
    default:
      return state;
  }
};

const disableState = (state = false, type) => {
  switch (type) {
    case actions.SET_DISABLE:
      return action.disable;
    default:
      return state;
  }
};

const selectedControl = (state = "sodium", action) => {
  switch (action.type) {
    case actions.SET_SELECTED_CONTROL:
      return action.val;
    default:
      return state;
  }
};

const activityReset = (state = false, action) => {
  switch (action.type) {
    case actions.SET_RESET_ACTIVITY:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  tripCount,
  disableState,
  activityReset,
  spectrumValue,
  animationState,
  selectedControl,
  selectedWavelength,
  ...reducers,
});
