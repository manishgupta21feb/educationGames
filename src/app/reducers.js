import * as actions from "./actions";

const reducers = {
  scaleChange: (state = 1, { type, scale }) => {
    switch (type) {
      case actions.SCALE_CHANGE:
        return scale;
      default:
        return state;
    }
  },

  currentPopup: (state = [], { type, id }) => {
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
  },

  ariaLiveText: (state = "", { type, text }) => {
    switch (type) {
      case actions.ARIA_LIVE_TEXT:
        return text;
      default:
        return state;
    }
  },

  showToastMessage: (state = false, { toggle, type }) => {
    switch (type) {
      case actions.TOGGLE_TOAST_MESSAGE:
        return toggle;
      default:
        return state;
    }
  },

  currentScreen: (state = 0, action) => {
    switch (action.type) {
      case actions.ON_CHANGE_SCREEN:
        return action.val;
      default:
        return state;
    }
  },

  resetFocusState: (state = false, { type, focus }) => {
    switch (type) {
      case actions.SET_RESET_FOCUS_STATE:
        return focus;
      default:
        return state;
    }
  },

  resetBtnState: (state = true, action) => {
    switch (action.type) {
      case actions.RESET_BTN_STATE:
        return action.val;
      default:
        return state;
    }
  },

  ariaLiveAssertive: (state = "", { type, message }) => {
    switch (type) {
      case actions.ARIA_LIVE_ASSERTIVE:
        return message;
      default:
        return state;
    }
  },
};

export default reducers;
