import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const questionsData = (
  state = data.equationsData.map((e) => JSON.parse(JSON.stringify(e))),
  action
) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const submitAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.SUBMIT_ANSWER:
      return answer;
    default:
      return state;
  }
};

const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
    default:
      return state;
  }
};

const startSimulation = (state = true, { type, value }) => {
  switch (type) {
    case actions.START_SIMULATION:
      return value;
    default:
      return state;
  }
};

const activityFinish = (state = false, { type, value }) => {
  switch (type) {
    case actions.ACTIVITY_FINISH:
      return value;
    default:
      return state;
  }
};

const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return { ...question };
    default:
      return state;
  }
};

const submitButtonPressed = (state = false, { type, pressed }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON_PRESSED:
      return pressed;
    default:
      return state;
  }
};

const protons = (state = {}, { type, item }) => {
  switch (type) {
    case actions.SET_PROTONS:
      return item;
    default:
      return state;
  }
};
const electrons = (state = {}, { type, item }) => {
  switch (type) {
    case actions.SET_ELECTRONS:
      return item;
    default:
      return state;
  }
};
const massNumber = (state = {}, { type, item }) => {
  switch (type) {
    case actions.SET_MASS_NUMBER:
      return item;
    default:
      return state;
  }
};
const elementName = (state = {}, { type, item }) => {
  switch (type) {
    case actions.SET_ELEMENT_NAME:
      return item;
    default:
      return state;
  }
};

const answered = (state = false, { type, item }) => {
  switch (type) {
    case actions.SET_ANSWERED:
      return item;
    default:
      return state;
  }
};

const correctOptions = (state = [], { type, item }) => {
  switch (type) {
    case actions.ADD_CORRECT_OPTIONS:
      const indexVal = state.indexOf(item);
      if (indexVal == -1) {
        const _state = [...state, item];
        return _state;
      }
      return state;
    case actions.REMOVE_ITEM_FROM_CORRECT:
      const index = state.indexOf(item);
      if (index !== -1) {
        const _state = [...state];
        _state.splice(index, 1);
        return _state;
      }
      return state;
    case actions.CLEAR_CORRECT_OPTIONS:
      return [];
    default:
      return state;
  }
};

const incorrectOptions = (state = [], { type, item }) => {
  switch (type) {
    case actions.ADD_INCORRECT_OPTIONS:
      console.log("From incorrect options: ", item);
      return [...state, item];
    case actions.REMOVE_ITEM_FROM_INCORRECT:
      const index = state.indexOf(item);
      if (index !== -1) {
        const _state = [...state];
        _state.splice(index, 1);
        return _state;
      }
      return state;
    case actions.CLEAR_INCORRECT_OPTIONS:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  protons,
  answered,
  electrons,
  massNumber,
  elementName,
  wrongAnswer,
  submitAnswer,
  questionCount,
  questionsData,
  correctOptions,
  activityFinish,
  startSimulation,
  incorrectOptions,
  selectedQuestion,
  submitButtonPressed,
  selectedAnswerOption,
  ...reducers,
});
