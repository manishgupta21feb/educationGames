import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";
import { getOptionType, getActiveQuestion } from "../helper.js";

import { combineReducers } from "redux";

const questionsData = (
  state = data.equationsData.map((e) => JSON.parse(JSON.stringify(e))),
  action
) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return getActiveQuestion(state);
    case actions.RESET_QUESTIONS_DATA:
      return getActiveQuestion(
        data.equationsData.map((e) => JSON.parse(JSON.stringify(e)))
      );
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
let initAnswer = {
  reactions: "",
  signs: "",
  _h: "",
  energy: "",
  isSubmitBtnClicked: false,
};
const getAnswerValue = (state = initAnswer, { type, params }) => {
  switch (type) {
    case actions.SET_ANSWER_VALUE:
      let result = getOptionType(params.type, params.data, state);
      return result;
    case actions.RESET_SET_ANSWER_VALUE:
      return initAnswer;
    default:
      return state;
  }
};

let initValue = {
  reactions: "",
  signs: "",
  _h: "",
  energy: "",
};
const getWrongAnswerValue = (state = initValue, { type, params }) => {
  switch (type) {
    case actions.SET_WRONG_ANSWER_VALUE:
      let result = getOptionType(params.type, params.data, state);
      return result;
    case actions.RESET_SET_WRONG_ANSWER_VALUE:
      return initValue;
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

const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return { ...question };
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

export default combineReducers({
  answered,
  electrons,
  elementName,
  questionCount,
  questionsData,
  selectedQuestion,
  selectedAnswerOption,
  getAnswerValue,
  getWrongAnswerValue,
  ...reducers,
});
