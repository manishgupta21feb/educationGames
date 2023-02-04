import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

export const visited = (state = {}, { type, val }) => {
  switch (type) {
    case actions.UPDATE_VISITED:
      let key = Object.keys(val)[0];
      let tempState = state;
      tempState[key]
        ? (tempState[key] = [...state[key], ...val[key]])
        : (tempState = { ...state, ...val });
      return { ...tempState };
    case actions.common.ON_CHANGE_SCREEN:
    case actions.ON_SCREEN2_RESET:
      return {};
    case actions.ON_SCREEN_UPDATE:
      return val;
    default:
      return state;
  }
};

export const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  visited,
  toastMsg,
  ...reducers,
});
