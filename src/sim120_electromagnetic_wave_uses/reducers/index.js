import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const questions = (state = [], { type, value }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return value;
    default:
      return state;
  }
};

export const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.value;
    default:
      return state;
  }
};

export const draggables = (state = [], action) => {
  switch (action.type) {
    case actions.SET_DRAGGABLES:
      return action.value;
    default:
      return state;
  }
};

export const reset = (state = false, action) => {
  switch (action.type) {
    case actions.RESET:
      return !state;
    default:
      return state;
  }
};


export default combineReducers({
  questions,
  toastMsg,
  draggables,
  reset,
  ...reducers,
});
