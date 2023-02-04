import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const observationsData = (state = data.observationsData, action) => {
  switch (action.type) {
    case actions.OBSERVATIONS_DATA:
      return action.data;
    case actions.IS_OBSERVATION_VISITED:
      let temp = state;
      let hold = temp.map((val) => {
        if (getNumber(val.id) == action.data) {
          val.isPlayed = true;
          return val;
        }
        const temp = JSON.parse(JSON.stringify(val));
        return temp;
      });
      return hold;

    default:
      return state;
  }
};
const getNextBtn = (state = true, { type, item }) => {
  switch (type) {
    case actions.NEXT_BUTTON_DISABLE:
      return item;
    default:
      return state;
  }
};

const questionCountValue = (state = 1, action) => {
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

const selectedQuestion = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return value;
    default:
      return state;
  }
};

const setMcq = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SET_MCQ:
      return value;
    default:
      return state;
  }
};
const setNextValue = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SET_NEXT:
      return value;
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
const mcqShow = (state =  "", { type, value }) => {
  switch (type) {
    case actions.IS_MCQ_SHOW:
      return value;
    default:
      return state;
  }
};
const isCompletionScreenShow = (state = true, { type, value }) => {
  switch (type) {
    case actions.COMPLETION_SCREEN_SHOW:
      return value;
    default:
      return state;
  }
};
const scenarioVisitedValue = (state = [], { type, count }) => {
  switch (type) {
    case actions.SCENARIO_VISITED:
      return [...state, count];
    case actions.RESET_SCENARIO_VISITED:
      return [];
    default:
      return state;
  }
};

const getNextClick = (state = -1, { type, count }) => {
  switch (type) {
    case actions.NEXT_CLICK:
      let result = state;
      if (count == 1) {
        result = result + 1;
      } else {
        result = 0;
      }
      return result;
    default:
      return state;
  }
};

export default combineReducers({
  getNextClick,
  wrongAnswer,
  submitAnswer,
  mcqShow,
  setMcq,
  isCompletionScreenShow,
  scenarioVisitedValue,
  questionCountValue,
  selectedQuestion,
  submitButtonPressed,
  selectedAnswerOption,
  observationsData,
  setNextValue,
  getNextBtn,

  ...reducers,
});
