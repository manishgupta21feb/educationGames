import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const selectedForce = (state = "", { type, force }) => {
  switch (type) {
    case actions.SELECT_FORCE:
      return force;
    default:
      return state;
  }
};

const selectedVideo = (state = "", { type, video }) => {
  switch (type) {
    case actions.SELECT_VIDEO:
      return video;
    default:
      return state;
  }
};

const playedVideos = (state = [], { type, videoId }) => {
  switch (type) {
    case actions.SET_PLAYED_VIDEO:
      return [...state, videoId];
    case actions.RESET_PLAYED_VIDEO:
      return [];
    default:
      return state;
  }
};

const activityCompleted = (state = false, { type, completed }) => {
  switch (type) {
    case actions.SET_ACTIVITY_COMPLETED:
      return completed;
    default:
      return state;
  }
};

const videoPlayState = (state = false, { type, played }) => {
  switch (type) {
    case actions.SET_VIDEO_PLAY_STATE:
      return played;
    default:
      return state;
  }
};

export default combineReducers({
  playedVideos,
  selectedForce,
  selectedVideo,
  videoPlayState,
  activityCompleted,
  ...reducers,
});
