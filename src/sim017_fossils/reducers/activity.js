import * as actions from "../actions/activity";

export const selectedHotspot = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_HOTSPOT:
      return id;
    default:
      return state;
  }
};

export const resetBtnState = (state = false, { type, button }) => {
  switch (type) {
    case actions.SET_RESET_BUTTON_STATE:
      return button;
    default:
      return state;
  }
};

export const visitedNodes = (state = [], { type, node }) => {
  switch (type) {
    case actions.UPDATE_VISITED_NODE:
      return [...state, node];
      case actions.RESET_VISITED_NODE:
        return [];
      default:
      return state;
  }
};
