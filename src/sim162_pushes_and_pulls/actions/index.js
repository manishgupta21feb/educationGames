import * as actions from "../../app/actions";

export const SET_SELECTED_VALUE = "SET_SELECTED_VALUE";
export const RESET_RUN_STATE = "RESET_RUN_STATE";
export const SET_RUN_STATE = "SET_RUN_STATE";
export const RESET = "RESET";
export const SET_VIDEO_PLAYED = "SET_VIDEO_PLAYED";
export const SCREEN_COUNT = "SCREEN_COUNT";
export const SELECTED_BUTTON = "SELECTED_BUTTON";

export const setSelectedValue = (value) => ({
  type: SET_SELECTED_VALUE,
  value,
});

export const setRunState = (value) => ({
  type: SET_RUN_STATE,
  value,
});

export const screenCount = (count) => ({
  type: SCREEN_COUNT,
  count,
});

export const selectedButton = (count) => ({
  type: SELECTED_BUTTON,
  count,
});

export const resetRunState = () => ({ type: RESET_RUN_STATE });

export const reset = () => ({ type: RESET });

export const setVideoPlayed = (value) => ({
  type: SET_VIDEO_PLAYED,
  value,
});

export const common = { ...actions };

export const thunks = {
  setSelectedValue: (value) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      dispatch(setSelectedValue(parseInt(value)));

      dispatch(setRunState(false));
    };
  },
  setRunState: (value) => {
    return (dispatch, getState) => {
      const { resetBtnState, videoPlayed, selectedValue, screenCount } =
        getState();
      if (screenCount == 2) {
        dispatch(selectedButton(selectedValue.value));
      }

      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      if (!value && !videoPlayed.includes(selectedValue.value)) {
        dispatch(setVideoPlayed(selectedValue.value));
      }
      dispatch(setRunState(value));
    };
  },
  reset: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(screenCount(0));
      dispatch(selectedButton(0));
      dispatch(reset());
    };
  },
  setSelectedButton: () => {
    return (dispatch, getState) => {
      const { screenCount } = getState();
      if (screenCount != 2) {
        dispatch(selectedButton(""));
      }
    };
  },
  setVideoEnd: () => {
    return (dispatch, getState) => {
      if (getState().screenCount == 2) {
        setTimeout(() => {
          dispatch(thunks.setRunState(false));
          dispatch(thunks.setSelectedButton());
        }, 1000);
      } else {
        dispatch(thunks.setRunState(false));
        dispatch(thunks.setSelectedButton());
      }
    };
  },
  nextButtonClick: () => {
    return (dispatch, getState) => {
      if (getState().screenCount == 2) {
        dispatch(selectedButton(1));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 200);
        dispatch(common.togglePopup(4));
      } else {
        if (getState().screenCount == 1) {
          dispatch(selectedButton(1));
        } else {
          dispatch(selectedButton(0));
        }
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        dispatch(screenCount(getState().screenCount + 1));
        dispatch(reset());
      }
    };
  },
};
