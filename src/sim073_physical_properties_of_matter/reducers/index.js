import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
    default:
      return state;
  }
};

const feedbackNarration = (state = true, action) => {
  switch (action.type) {
    case actions.FEEDBACK_NARRATION:
      return action.val;
    default:
      return state;
  }
};
const selectedPhysicalProperty = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_PHYSICAL_PROPERTY:
      return action.val;
    default:
      return state;
  }
};
const selectedItem = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_ITEM:
      return action.val;
    default:
      return state;
  }
};
const priviousSelectedPhysicalProperties = (state = [], action) => {
  switch (action.type) {
    case actions.PRIVIOUS_SELECTED_PHYSICAL_PROPERTIES:
      if (state.indexOf(action.id) == -1) {
        return [...state, action.id];
      }
      return state;
    case actions.RESET_PRIVIOUS_SELECTED_PHYSICAL_PROPERTIES:
      return [];
    default:
      return state;
  }
};
const priviousSelectedItem = (state = [], action) => {
  switch (action.type) {
    case actions.PRIVIOUS_SELECTED_ITEM:
      if (state.indexOf(action.id) == -1) {
        return [...state, action.id];
      }
      return state;
    case actions.RESET_PRIVIOUS_SELECTED_ITEM:
      return [];
    default:
      return state;
  }
};
const showNextButton = (state = false, action) => {
  switch (action.type) {
    case actions.SHOW_NEXT_BUTTON:
      return action.val;
    default:
      return state;
  }
};
export default combineReducers({
  selectedItem,
  startActivity,
  showNextButton,
  feedbackNarration,
  priviousSelectedItem,
  selectedPhysicalProperty,
  priviousSelectedPhysicalProperties,
  ...reducers,
});
