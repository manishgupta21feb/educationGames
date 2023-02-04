import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import data from "../data";
import { cloneDeep } from "lodash";
import { randomizeItems } from "../helper";

const questions = (state = cloneDeep(data.questions), { type, items }) => {
  switch (type) {
    case actions.SET_QUESTIONS:
      return items;
    case actions.RESET_QUESTIONS:
      return cloneDeep(data.questions);
    default:
      return state;
  }
};

const selectedQuestion = (state = null, { type, question }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return question;
    case actions.RESET_QUESTION:
      return null;
    default:
      return state;
  }
};

const selectedSubquestion = (state = null, { type, subQuestion }) => {
  switch (type) {
    case actions.SELECT_SUBQUESTION:
      return subQuestion;
    case actions.RESET_SUBQUESTION:
      return null;
    default:
      return state;
  }
};

const optionItems = (
  state = randomizeItems(data.optionItems),
  { type, items }
) => {
  switch (type) {
    case actions.SET_OPTION_ITEMS:
      return items;
    case actions.UPDATE_OPTION_ITEMS:
      return items;
    case actions.RESET_OPTION_ITEMS:
      return randomizeItems(data.optionItems);
    default:
      return state;
  }
};

const selectedItems = (state = [], { type, item }) => {
  switch (type) {
    case actions.TOGGLE_SELECTED_ITEM:
      const _state = [...state];
      const index = _state.indexOf(item);
      if (index == -1) {
        _state.push(item);
      } else {
        _state.splice(index, 1);
      }
      return _state;
    case actions.RESET_SELECTED_ITEMS:
      return [];
    default:
      return state;
  }
};

const questionAnswered = (state = "", { type, answered }) => {
  switch (type) {
    case actions.SET_QUESTION_ANSWERED:
      return answered;
    default:
      return state;
  }
};

export default combineReducers({
  questions,
  optionItems,
  selectedItems,
  selectedQuestion,
  questionAnswered,
  selectedSubquestion,
  ...reducers,
});
