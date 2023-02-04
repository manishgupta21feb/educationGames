import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import * as actions from "../actions";

const viewVisited = (state = [], { type, value }) => {
  switch (type) {
    case actions.SET_VIEW_VISITED:
      let newState = [...new Set([...state, value])];
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  viewVisited,
  ...reducers,
});
