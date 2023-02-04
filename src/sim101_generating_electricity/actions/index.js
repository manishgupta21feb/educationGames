import * as actions from "../../app/actions";
import data from "../data";
export const SET_SELECTED_VALUE = "SET_SELECTED_VALUE";
export const RESET_RUN_STATE = "RESET_RUN_STATE";
export const SET_RUN_STATE = "SET_RUN_STATE";
export const RESET = "RESET";
export const SET_VIDEO_PLAYED = "SET_VIDEO_PLAYED";

import { isAndroid, isIOS, isMacOs } from "react-device-detect";

export const setSelectedValue = (value) => ({
  type: SET_SELECTED_VALUE,
  value,
});

export const setRunState = (value) => ({
  type: SET_RUN_STATE,
  value,
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
      const { resetBtnState, videoPlayed, selectedValue } = getState();
      const liveText = data.videos.filter(
        (v) => v.id == "poster" + selectedValue.value
      )[0].liveText;
      if (value) {
        if (isAndroid || isIOS || isMacOs) {
          setTimeout(() => {
            dispatch(common.thunks.ariaLiveAssertive(liveText));
          }, 200);
        } else {
          dispatch(common.thunks.ariaLiveAssertive(liveText));
        }
      }

      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      if (!value && !videoPlayed.includes(selectedValue.value)) {
        dispatch(setVideoPlayed(selectedValue.value));
        TincanManager.data.percentage = parseInt(
          ((videoPlayed.length + 1) / 3) * 100
        );
        TincanManager.saveTincanData();
      }
      dispatch(setRunState(value));
    };
  },
  continueBtn: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        EventManager.broadcast("COMPLETION_SCREEN");
      }, 200);
      dispatch(common.togglePopup(4));
      TincanManager.data.completed = true;
      TincanManager.data.percentage = 100;
      TincanManager.saveTincanData();
    };
  },
  reset: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(reset());
      TincanManager.resetTincanData();
    };
  },
};
