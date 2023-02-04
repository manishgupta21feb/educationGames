import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const getAutoStart = (state = true, action) => {
  switch (action.type) {
    case actions.IS_AUTO_START:
      return action.val;
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

const pauseVideo = (state = false, { type, value }) => {
  switch (type) {
    case actions.PAUSE_VIDEO:
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

const audioStopped = (state = false, { type, stopped }) => {
  switch (type) {
    case actions.SET_AUDIO_STOPPED:
      return stopped;
    default:
      return state;
  }
};

const isVideoEnded = (state = false, { type, videoStatus }) => {
  switch (type) {
    case actions.IS_VIDEO_ENDED:
      return videoStatus;
    default:
      return state;
  }
};

const videoPlayState = (state = "pause", { type, playState }) => {
  switch (type) {
    case actions.SET_VIDEO_PLAY_STATE:
      return playState;
    default:
      return state;
  }
};

export default combineReducers({
  pauseVideo,
  wrongAnswer,
  submitAnswer,
  audioStopped,
  questionsData,
  questionCount,
  activityFinish,
  startSimulation,
  selectedQuestion,
  submitButtonPressed,
  selectedAnswerOption,
  isVideoEnded,
  getAutoStart,
  videoPlayState,
  ...reducers,
});
