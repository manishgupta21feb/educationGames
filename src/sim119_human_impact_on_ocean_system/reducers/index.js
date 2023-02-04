import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const selectedHotspot = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_HOTSPOT:
      return id;
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
}

const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTED:
      return attempted;
    default:
      return state;
  }
}

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
}

const visitedHotspots = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.UPDATE_VISITED_HOTSPOTS:
      return [...state, hotspot];
    case actions.RESET_VISITED_HOTSPOTS:
      return [];
    default:
      return state;
  }
}

const nextButtonClickedState = (state = false, { type, clicked }) => {
  switch (type) {
    case actions.BUTTON_CLICKED:
      return clicked;
    default:
      return state;
  }
};

const questionCount = (state = 0, { type, count }) => {
  switch (type) {
    case actions.QUESTION_COUNT:
      return count;
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

const isVideoEnded = (state = false, { type, videoStatus }) => {
  switch (type) {
    case actions.IS_VIDEO_ENDED:
      return videoStatus;
    default:
      return state;
  }
};

const videoPlayState = (state = true, { type, videoState }) => {
  switch (type) {
    case actions.SET_VIDEO_STATE:
      return videoState;
    case actions.TOGGLE_VIDEO_STATE:
      return !state;
    default:
      return state;
  }
};

const videoLiveText = (state = " ", { type, item }) => {
  switch (type) {
    case actions.VIDEO_LIVE_TEXT:
      return item;
    default:
      return state;
  }
};

export default combineReducers({
  selectedHotspot,
  selectedOption,
  answerAttempted,
  correctAnswer,
  visitedHotspots,
  nextButtonClickedState,
  questionCount,
  showStatic,
  isVideoEnded,
  videoPlayState,
  videoLiveText,
  ...reducers,
});
