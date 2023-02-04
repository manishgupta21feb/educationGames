import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const mainScreen = (state = true, { type, val }) => {
  switch (type) {
    case actions.MAIN_SCREEN:
      return val;
    default:
      return state;
  }
};
const pendulumScreen = (state = true, { type, val }) => {
  switch (type) {
    case actions.PENDULUM_PAGE:
      return val;
    default:
      return state;
  }
};

const pendulumOneMass = (state = data.valuesMass[1], { type, val }) => {
  switch (type) {
    case actions.PENDULUM_ONE_MASS:
      return val;
    default:
      return state;
  }
};

const pendulumOneLength = (
  state = data.pendulumOne.valuesLength[0],
  { type, val }
) => {
  switch (type) {
    case actions.PENDULUM_ONE_LENGTH:
      return val;
    default:
      return state;
  }
};

const pendulumTwoMass = (state = data.valuesMass[1], { type, val }) => {
  switch (type) {
    case actions.PENDULUM_TWO_MASS:
      return val;
    default:
      return state;
  }
};

const pendulumTwoLength = (
  state = data.pendulumTwo.valuesLength[0],
  { type, val }
) => {
  switch (type) {
    case actions.PENDULUM_TWO_LENGTH:
      return val;
    default:
      return state;
  }
};

const degree = (state = true, { type, val }) => {
  switch (type) {
    case actions.SET_DEGREE:
      return val;
    default:
      return state;
  }
};

const startStop = (state = true, { type, val }) => {
  switch (type) {
    case actions.START_STOP_ANIMATION:
      return val;
    default:
      return state;
  }
};
const continueButton = (state = true, { type, val }) => {
  switch (type) {
    case actions.CONTINUE_BUTTON:
      return val;
    default:
      return state;
  }
};

const visitedHotspot = (state = [], { type, val }) => {
  switch (type) {
    case actions.VISITED_HOTSPOT:
      if (val != "") {
        return [...state, val];
      } else {
        return [];
      }

    default:
      return state;
  }
};

const liveAltPendulumOne = (state = "", { type, val }) => {
  switch (type) {
    case actions.LIVE_ALT_PENDULUM_ONE:
      return val;
    default:
      return state;
  }
};

const liveAltPendulumTwo = (state = "", { type, val }) => {
  switch (type) {
    case actions.LIVE_ALT_PENDULUM_TWO:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  mainScreen,
  pendulumScreen,
  pendulumOneMass,
  pendulumOneLength,
  pendulumTwoMass,
  pendulumTwoLength,
  degree,
  startStop,
  continueButton,
  visitedHotspot,
  liveAltPendulumOne,
  liveAltPendulumTwo,
  ...reducers,
});
