import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const selectedQuestion = (state = null, { type, id }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return id;
    case actions.RESET_QUESTION:
      return state;
    default:
      return state;
  }
};

const answered = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_ANSWERED:
      return value;
    default:
      return state;
  }
};

const arrayVisited = (state = [], { type, val }) => {
  var arr = state;
  switch (type) {
    case actions.ARRAY_VISITED:
      return [...state, val];
    case actions.DELETE_ARRAY_VISITED:
      return [];
    default:
      return state;
  }
};

const itemsVisited = (state = 0, { type, count }) => {
  switch (type) {
    case actions.SET_ITEMS_VISITED:
      return count;
    default:
      return state;
  }
};



export default combineReducers({
  answered,
  arrayVisited,
  itemsVisited,
  selectedQuestion,
  ...reducers,
});
