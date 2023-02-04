import data from "../data";
import * as actions from "../../app/actions";
export const common = { ...actions };

const { togglePopup, setResetFocusState, updateResetBtnState } = actions;

export const SELECT_FORCE = "SELECT_FORCE";
export const SELECT_VIDEO = "SELECT_VIDEO";
export const SET_PLAYED_VIDEO = "SET_PLAYED_VIDEO";
export const RESET_PLAYED_VIDEO = "RESET_PLAYED_VIDEO";
export const SET_VIDEO_PLAY_STATE = "SET_VIDEO_PLAY_STATE";
export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";

export const selectForce = (force) => ({
  force,
  type: SELECT_FORCE,
});

export const selectVideo = (video) => ({
  video,
  type: SELECT_VIDEO,
});

export const setPlayedVideo = (videoId) => ({
  videoId,
  type: SET_PLAYED_VIDEO,
});

export const resetPlayedVideo = () => ({
  type: RESET_PLAYED_VIDEO,
});

export const setActivityCompleted = (completed) => ({
  completed,
  type: SET_ACTIVITY_COMPLETED,
});

export const setVideoPlayed = (played) => ({
  played,
  type: SET_VIDEO_PLAY_STATE,
});

export const thunks = {
  selectForce: (id) => (dispatch, getState) => {
    const { playedVideos, resetBtnState } = getState();
    dispatch(selectForce(id));
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
    if (playedVideos.indexOf(id) == -1) {
      dispatch(setPlayedVideo(id));
    }
    const force = data.pushForces.find((f) => f.id == id);
    dispatch(selectVideo({ ...force }));
  },

  onVideoEnded: () => (dispatch, getState) => {
    const { playedVideos } = getState();
    dispatch(setVideoPlayed(false));
    if (playedVideos.length > 2) {
      dispatch(setActivityCompleted(true));
    }
  },

  resetActivity: () => (dispatch, getState) => {
    const { currentPopup } = getState();
    dispatch(selectForce(""));
    dispatch(selectVideo(""));
    dispatch(resetPlayedVideo());
    dispatch(setActivityCompleted(false));
    if (currentPopup.indexOf(2) >= 0) {
      dispatch(togglePopup(2));
    }
    if (currentPopup.indexOf(4) >= 0) {
      dispatch(togglePopup(4));
    }
    dispatch(togglePopup(1));
  },
};
