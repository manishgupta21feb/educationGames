import { combineReducers } from "redux";
import * as actions from "../actions";
import * as ActivityReducers from "./activity";

const scaleChange = (state = 1, { type, scale }) => {
  switch (type) {
    case actions.SCALE_CHANGE:
      return scale;
    default:
      return state;
  }
};

const currentPopup = (state = [], { type, id }) => {
  switch (type) {
    case actions.TOGGLE_POPUP:
      if (state.indexOf(id) == -1) {
        return [...state, id];
      } else {
        const _state = [...state];
        _state.splice(_state.indexOf(id), 1);
        return [..._state];
      }
    default:
      return state;
  }
};

function ariaLiveText(state = "", { type, text }) {
  switch (type) {
    case actions.ARIA_LIVE_TEXT:
      return text;
    default:
      return state;
  }
}

const showToastMessage = (state = false, { toggle, type }) => {
  switch (type) {
    case actions.TOGGLE_TOAST_MESSAGE:
      return toggle;
    default:
      return state;
  }
};

export default combineReducers({
  scaleChange,
  currentPopup,
  ariaLiveText,
  showToastMessage,
  ...ActivityReducers,
});
