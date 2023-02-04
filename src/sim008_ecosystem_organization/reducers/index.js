import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

const selectedOrganisms = (state = [], action) => {
  switch (action.type) {
    case actions.SELECT_ORGANISM:
      if (state.indexOf(action.id) == -1) {
        return [...state, action.id];
      }
      return state;

    case actions.RESET_ORGANISMS:
      return [];

    default:
      return state;
  }
};

const selectedQuestion = (state = 1, { type }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return state + 1;
    case actions.RESET_QUESTION:
      return 1;
    default:
      return state;
  }
};

const showStatic = (state = false, { type, staticState }) => {
  switch (type) {
    case actions.SET_STATIC:
      return staticState;
    default:
      return state;
  }
};

const selectedOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return option;
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

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
    default:
      return state;
  }
};

const feedbackNarration = (state = true, action) => {
  switch (action.type) {
    case actions.FEEDBACK_NARRATION:
      return action.val;
    default:
      return state;
  }
};

const audioPlayState = (state = true, { type, playState }) => {
  switch (type) {
    case actions.AUDIO_PLAY_STATE:
      return playState;
    case actions.AUDIO_STATE_STOP:
      return false;
    default:
      return state;
  }
};
const setPreviousSound = (state = "", { type, data }) => {
  switch (type) {
    case actions.SET_PREVIOUS_SOUND:
      return data;

    default:
      return state;
  }
};

export default combineReducers({
  showStatic,
  correctAnswer,
  startActivity,
  selectedOption,
  audioPlayState,
  answerAttempted,
  selectedQuestion,
  selectedOrganisms,
  feedbackNarration,
  setPreviousSound,
  ...reducers,
});
