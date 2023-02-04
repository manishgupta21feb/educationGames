import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const screenVal = (state = "", { type, val }) => {
  switch (type) {
    case actions.SCREEN_VAL:
      return val;
    default:
      return state;
  }
};

const visitedPage = (state = "", { type, val }) => {
  switch (type) {
    case actions.VISITED_PAGE:
      if (val != "") {
        return [...state, val];
      } else {
        return [];
      }
    default:
      return state;
  }
};
let initialState = data.screensData.map((mq) => ({ ...mq }));
const selectedTrait = (state = initialState, { type, val, questions }) => {
  switch (type) {
    case actions.SELECTED_TRAIT:
      return state.filter((sd) => {
        return sd.id == val;
      });

    case actions.UPDATED_QUESTION:
      return questions;
    case actions.RESET_TRAITS:
      return [...data.screensData];
    default:
      return state;
  }
};

const currectQuestion = (state = {}, { type, val }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return { ...val };
    default:
      return state;
  }
};

const count = (state = 1, { type, val }) => {
  switch (type) {
    case actions.TOTAL_QUESTION_COUNT:
      return val;
    default:
      return state;
  }
};

const correctAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

const radioOption = (state = "", { type, val }) => {
  switch (type) {
    case actions.RADIO_OPTION:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  visitedPage,
  screenVal,
  selectedTrait,
  currectQuestion,
  count,
  correctAnswer,
  radioOption,
  ...reducers,
});
