import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const selectedValue = (
  state = { value: 1, isReseted: true },
  { type, value }
) => {
  switch (type) {
    case actions.SET_SELECTED_VALUE:
      return { value: value, isReseted: false };
    case actions.RESET:
      return { value: 1, isReseted: true };
    default:
      return state;
  }
};

const videoPlayed = (state = [], { type, value }) => {
  switch (type) {
    case actions.SET_VIDEO_PLAYED:
      return [...new Set([...state, value])];
    case actions.RESET:
      return [];
    default:
      return state;
  }
};

const runState = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_RUN_STATE:
      return value;
    case actions.RESET_RUN_STATE:
      return false;
    case actions.RESET:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  runState,
  selectedValue,
  videoPlayed,
  ...reducers,
});
