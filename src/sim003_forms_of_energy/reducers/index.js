import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import dataSet from "../data/index";

const toggleQuestion = (state = true, { type, show }) => {
  switch (type) {
    case actions.SHOW_FULL_VIEW:
      return show;
    default:
      return state;
  }
};

const selectedQuestion = (state = {}, { type, value }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return { ...dataSet.thumbnails[value] };
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

const visitedThumbnails = (state = [], { type, id }) => {
  switch (type) {
    case actions.SET_VISITED_THUMBNAILS:
      if (state.indexOf(id) == -1) {
        return [...state, id];
      }
      return state;
    case actions.RESET_VISITED_THUMBNAILS:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  toggleQuestion,
  videoPlayState,
  selectedQuestion,
  visitedThumbnails,
  ...reducers,
});
