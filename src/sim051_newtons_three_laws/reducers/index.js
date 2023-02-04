import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const intialFValue = 80;
const selectedF1Value = (state = intialFValue, { type, value }) => {
  switch (type) {
    case actions.SET_F1_VALUE:
      return value;
    case actions.RESET_SELECTED_F:
      return intialFValue;
    default:
      return state;
  }
};

const selectedF2Value = (state = intialFValue, { type, value }) => {
  switch (type) {
    case actions.SET_F2_VALUE:
      return value;
    case actions.RESET_SELECTED_F:
      return intialFValue;
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

const viewVisited = (state = [], { type, value }) => {
  switch (type) {
    case actions.SET_VIEW_VISITED:
      return [...state, value];
    default:
      return state;
  }
};


export default combineReducers({
  selectedF1Value,
  selectedF2Value,
  toastMsg,
  viewVisited,
  ...reducers,
});
