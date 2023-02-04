import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  demoReducer,
  ...reducers,
});
