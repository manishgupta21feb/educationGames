import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const selectedDepartment = (state = {}, { type, department }) => {
  switch (type) {
    case actions.SET_SELECTED_DEPARTMENT:
      return department;
    case actions.RESET:
      return {};
    default:
      return state;
  }
};

const visitedDepartments = (state = [], { type, department }) => {
  switch (type) {
    case actions.SET_VISITED_DEPARTMENT:
      return [...new Set([...state, department])];
    case actions.RESET:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  selectedDepartment,
  visitedDepartments,
  ...reducers,
});
