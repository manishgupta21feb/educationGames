import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const elementData = (
  state = data.elementData.map((e) => ({ ...e })),
  action
) => {
  switch (action.type) {
    case actions.ELEMENT_DATA:
      return action.val;
    default:
      return state;
  }
};

const dropElement = (state = {}, action) => {
  switch (action.type) {
    case actions.DROP_ELEMENT:
      return action.val;
    default:
      return state;
  }
};

const updateAttempt = (state = [], action) => {
  switch (action.type) {
    case actions.UPDATE_ATTEMPT:
      return action.val;
    default:
      return state;
  }
};

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

const simulationEnd = (state = false, action) => {
  switch (action.type) {
    case actions.SIMULATION_END:
      return action.val;
    default:
      return state;
  }
};

const selectedQuestion = (state = 1, action) => {
  switch (action.type) {
    case actions.SELECT_QUESTION:
      return action.val;
    case action.RESET_QUESTION:
      return 1;
    default:
      return state;
  }
};

const showAnimation = (state = false, action) => {
  switch (action.type) {
    case actions.SET_ANIMATION:
      return action.val;
    default:
      return state;
  }
};

const correctAnswer = (state = false, action) => {
  switch (action.type) {
    case actions.CORRECT_ANSWER:
      return action.val;
    default:
      return state;
  }
};

const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTTED:
      return attempted;
    default:
      return state;
  }
};

const droppedItems = (
  state = ["", "", "", "", "", ""],
  { type, item, index, itemsArray }
) => {
  switch (type) {
    case actions.UPDATE_DROP_ITEM:
      const _state = [...state];
      _state[index] = item;
      return _state;
    case actions.UPDATE_DROPPED_ITEMS_FROM_ARRAY:
      return [...itemsArray];
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  dropElement,
  elementData,
  droppedItems,
  correctAnswer,
  showAnimation,
  simulationEnd,
  updateAttempt,
  answerAttempted,
  selectedQuestion,
  ...reducers,
});
