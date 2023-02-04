import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

const questionsData = (
  state = data.equationsData.map((q) => ({ ...q })),
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

const selectedShapeAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_SHAPE_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const selectedLonePairAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_LONEPAIR_ANSWER_OPTION:
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

const audioStopped = (state = false, { type, stopped }) => {
  switch (type) {
    case actions.SET_AUDIO_STOPPED:
      return stopped;
    default:
      return state;
  }
};

const toastMessageType = (state = "", action) => {
  switch (action.type) {
    case actions.SET_TOAST_MESSAGE_TYPE:
      return action.toastType;
    default:
      return state;
  }
};

const showNextBtn = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_NEXT_BUTTON:
      return val;
    default:
      return state;
  }
};

const disableLonePairRadio = (state = false, { type, val }) => {
  switch (type) {
    case actions.DISABLE_LONE_PAIR_RADIO:
      return val;
    default:
      return state;
  }
};

const disableShapeRadio = (state = false, { type, val }) => {
  switch (type) {
    case actions.DISABLE_SHAPE_RADIO:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  showNextBtn,
  audioStopped,
  submitAnswer,
  questionsData,
  questionCount,
  activityFinish,
  startSimulation,
  selectedQuestion,
  toastMessageType,
  disableShapeRadio,
  disableLonePairRadio,
  selectedShapeAnswerOption,
  selectedLonePairAnswerOption,
  ...reducers,
});
