import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

const elementData = (state = [], action) => {
  switch (action.type) {
    case actions.ELEMENT_DATA:
      return action.val;
    default:
      return state;
  }
};

const isReset = (state = false, action) => {
  switch (action.type) {
    case actions.TOGGLE_RESET:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  isReset,
  toastMsg,
  elementData,
  ...reducers,
});
