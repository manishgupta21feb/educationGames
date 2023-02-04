import * as actions from "../../app/actions";
import data from "../data";

export const common = { ...actions };

export const SHOW_FULL_VIEW = "SHOW_FULL_VIEW";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const SET_VIDEO_STATE = "SET_VIDEO_STATE";
export const TOGGLE_VIDEO_STATE = "TOGGLE_VIDEO_STATE";
export const SET_VISITED_THUMBNAILS = "SET_VISITED_THUMBNAILS";
export const RESET_VISITED_THUMBNAILS = "RESET_VISITED_THUMBNAILS";

export const toggleQuestion = (show) => ({
  type: SHOW_FULL_VIEW,
  show,
});

export const selectQuestion = (value = 0) => ({
  type: SELECT_QUESTION,
  value,
});

export const setVideoState = (videoState) => ({
  type: SET_VIDEO_STATE,
  videoState,
});

export const toggleVideoState = () => ({ type: TOGGLE_VIDEO_STATE });

export const resetVisitedThumbnails = () => ({
  type: RESET_VISITED_THUMBNAILS,
});

export const setVisitedThumbnails = (id) => ({
  id,
  type: SET_VISITED_THUMBNAILS,
});

export const thunk = {
  setVisitedThumbnails: (id) => {
    return (dispatch, getState) => {
      dispatch(setVisitedThumbnails(id));
      const { visitedThumbnails } = getState();
      if (visitedThumbnails.length == data.thumbnails.length) {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },
};
