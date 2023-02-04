import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const resetGamePT = (state = false, action) => {
  switch (action.type) {
    case actions.RESET_GAME_PT:
      return action.val;
    default:
      return state;
  }
};

const selectedWavelength = (state = 5, action) => {
  switch (action.type) {
    case actions.SET_WAVELENGTH:
      return action.val;
    default:
      return state;
  }
};

const isPaused = (state = true, action) => {
  switch (action.type) {
    case actions.TOGGLE_PAUSE:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  isPaused,
  resetGamePT,
  selectedWavelength,
  ...reducers,
});
