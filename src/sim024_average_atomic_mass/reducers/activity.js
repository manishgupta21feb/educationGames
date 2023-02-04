import * as actions from "../actions/activity";

export const resetBtnState = (state = false, action) => {
  switch (action.type) {
    case actions.RESET_BTN_STATE:
      return action.val;
    default:
      return state;
  }
};

export const resetFocusState = (state = false, { type, focus }) => {
  switch (type) {
    case actions.SET_RESET_FOCUS_STATE:
      return focus;
    default:
      return state;
  }
};

export const visited = (state = [], action) => {
  switch (action.type) {
    case actions.UPDATE_VISITED:
      return [...state, action.val];
    case actions.TOGGLE_RESET:
      return [];
    default:
      return state;
  }
};
