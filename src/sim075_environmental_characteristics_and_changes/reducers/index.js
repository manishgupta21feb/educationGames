import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const initialRatings = data.ratings.reduce((result, r) => {
  return { ...result, [r.id]: r.value };
}, {});

const selectedAnsId = (state = "", { type, value }) => {
  switch (type) {
    case actions.SELECTED_ANS_ID:
      return value;
    case actions.RESET:
      return "";
    default:
      return state;
  }
};

const finalStarRating =  (state = initialRatings, { type, value }) => {
  switch (type) {
    case actions.SET_FINAL_STAR_RATING:
      return value;
    case actions.RESET:
      return initialRatings;
    default:
      return state;
  }
};

export default combineReducers({
  selectedAnsId,
  finalStarRating,
  ...reducers,
});
