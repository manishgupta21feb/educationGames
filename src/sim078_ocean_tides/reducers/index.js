import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const getNextBtn = (state = true, { type, item }) => {
  switch (type) {
    case actions.NEXT_BUTTON_DISABLE:
      return item;
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

const selectedButton = (state = 0, { type }) => {
  switch (type) {
    case actions.SELECT_BUTTON:
      return state + 1;
    case actions.RESET_BUTTON:
      return 0;
    default:
      return state;
  }
};

const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.id;

    case actions.RESET_HOTSPOT:
      return state;

    default:
      return state;
  }
};

const nextButtonClickedState = (state = false, { type, action }) => {
  switch (type) {
    case actions.BUTTON_CLICKED:
      return action;
    default:
      return state;
  }
};

const jumpToMCQScreenState = (state = false, { type, action }) => {
  switch (type) {
    case actions.JUMP_TO_MCQ_SCREEN:
      return action;
    default:
      return state;
  }
};

const visitedHotspots = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.UPDATE_VISITED_HOTSPOTS:
      return [...state, hotspot];
    case actions.RESET_VISITED_HOTSPOTS:
      return [];
    default:
      return state;
  }
};

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
const currentExperimentNumber = (state = 0, action) => {
  switch (action.type) {
    case actions.CURRENT_EXPERIMENT_NUMBER:
      return action.data;
    default:
      return state;
  }
};

const questionsData = (state = [...data.equationsData], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const questionCount = (state = 0, action) => {
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
const setViewScreen = (state = true, { type, id }) => {
  switch (type) {
    case actions.SET_VIEW_SCREEN:
      return id;
    default:
      return state;
  }
};
const setViewVideo = (state = true, { type, id }) => {
  switch (type) {
    case actions.SET_VIEW_VIDEO:
      return id;
    default:
      return state;
  }
};

export default combineReducers({
  observationsData,
  currentExperimentNumber,
  submitAnswer,
  selectedAnswerOption,
  questionCount,
  submitButtonPressed,
  selectedQuestion,
  wrongAnswer,
  questionsData,
  setViewScreen,
  setViewVideo,
  selectedButton,
  visitedHotspots,
  selectedHotspot,
  startSimulation,
  jumpToMCQScreenState,
  nextButtonClickedState,
  getNextBtn,
  ...reducers,
});
