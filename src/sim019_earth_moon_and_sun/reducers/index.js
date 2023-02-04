import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const selectedDay = (state = 1, { type, day }) => {
  switch (type) {
    case actions.SELECT_DAY:
      return day;
    default:
      return state;
  }
};

export default combineReducers({
  selectedDay,
  ...reducers,
});
