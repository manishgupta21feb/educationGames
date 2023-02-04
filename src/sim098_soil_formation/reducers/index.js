import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

export const disabledNavigationButtons = ["selfcheck"];

const setIsVisitedTab = (state = [0], { type, data }) => {
  switch (type) {
    case actions.IS_VISITED_TAB:
      let result = [...state];
      if (!result.includes(data)) {
        result.push(data);
      }
      return result;
    default:
      return state;
  }
};

const isResetButtonDisable = (state = true, { type, data }) => {
  switch (type) {
    case actions.IS_RESET_BUTTON_DISABLE:
      return data;
    default:
      return state;
  }
};

const selectedTab = (state = 0, { type, items }) => {
  switch (type) {
    case actions.GLOBAL_SELECTED_TAB:
      return items;
    default:
      return state;
  }
};

const soilSection = (state = false, { type, items }) => {
  switch (type) {
    case actions.SOIL_SECTION:
      return items;
    default:
      return state;
  }
};

export default combineReducers({
  selectedTab,
  isResetButtonDisable,
  setIsVisitedTab,
  soilSection,
  ...reducers,
});
