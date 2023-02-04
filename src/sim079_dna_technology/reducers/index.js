import * as actions from "../actions";
import reducers from "../../app/reducers";
import { combineReducers } from "redux";

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
const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.id;
    default:
      return state;
  }
};
const secondScreenData = (state = {}, { type, data }) => {
  switch (type) {
    case actions.SET_DATA:
      return data;
    default:
      return state;
  }
};

const setVisitedData = (state = [], { type, data }) => {
  switch (type) {
    case actions.VISITED_HOTSPOT:
      let result = [...state];
      if (!result.includes(data)) {
        result.push(data);
      }
      return result;
    case actions.RESET_VISITED_HOTSPOT:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  startActivity,
  resetFocusState,
  selectedHotspot,
  secondScreenData,
  setVisitedData,

  ...reducers,
});
