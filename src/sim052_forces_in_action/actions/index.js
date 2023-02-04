import { element } from "prop-types";
import * as actions from "../../app/actions";
import { isAndroid, isIOS, isMacOs } from "react-device-detect";
import data from "../data";

const activityStatus = [];
export const LEVEL_ONE = "LEVEL_ONE";
export const LEVEL = "LEVEL";
export const VIEW_PLAYED = "VIEW_PLAYED";
export const DRAG_DATA = "DRAG_DATA";
export const DROPPED_ITEMS = "DROPPED_ITEMS";
export const TOTAL_STRENGTH = "TOTAL_STRENGTH";
export const CURRENT_VIDEO = "CURRENT_VIDEO";
export const START_TUG_WAR = "START_TUG_WAR";
export const UPDATED_SLIDER = "UPDATED_SLIDER";
export const VIDEO_ENDED = "VIDEO_ENDED";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const DROP_ZONES = "DROP_ZONES";
export const CURRENT_DRAG = "CURRENT_DRAG";
export const SIM_DATA = "SIM_DATA";
export const common = { ...actions };

export const setActivityStarted = (value) => {
  return {
    type: LEVEL_ONE,
    value,
  };
};
export const setDropZones = (value) => ({
  type: DROP_ZONES,
  value,
});
export const setLevel = (value) => ({
  type: LEVEL,
  value,
});

export const setViewPlayed = (value) => ({
  type: VIEW_PLAYED,
  value,
});

export const setDragData = (value) => ({
  type: DRAG_DATA,
  value,
});

export const setDroppedItems = (value) => ({
  type: DROPPED_ITEMS,
  value,
});

export const setTotalStrength = (value) => ({
  type: TOTAL_STRENGTH,
  value,
});
export const setCurrentVideo = (value) => ({
  type: CURRENT_VIDEO,
  value,
});
export const setForceBegin = (value) => ({
  type: START_TUG_WAR,
  value,
});
export const setUpdateSlider = (value) => ({
  type: UPDATED_SLIDER,
  value,
});
export const setVideoEnded = (value) => ({
  type: VIDEO_ENDED,
  value,
});
export const setUpdateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});
export const setCurrentDraggable = (val) => ({
  val,
  type: CURRENT_DRAG,
});

export const setData = (val) => ({
  val,
  type: SIM_DATA,
});

export const thunk = {
  viewHandler: () => {
    return (dispatch, getState) => {
      const { getViewPlayed } = getState();
      if (getViewPlayed.length == 2) {
        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();
      }
      if (getViewPlayed.length == 1) {
        TincanManager.data.percentage = 50;
        TincanManager.data.completed = false;
        TincanManager.saveTincanData();
      }
    };
  },

  exitHandler: () => {
    return (dispatch) => {
      dispatch(setLevel(0));
      dispatch(setUpdateSlider(0));
      dispatch(setDroppedItems({}));
      dispatch(setTotalStrength([]));
      dispatch(setCurrentVideo(0));
      dispatch(setForceBegin(false));
      dispatch(setVideoEnded(false));

      dispatch(common.setResetFocusState(false));
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 200);
      dispatch(setActivityStarted(true));
      dispatch(thunk.viewHandler());
    };
  },
  resetTugWar: () => {
    return (dispatch) => {
      dispatch(setDroppedItems({}));
      dispatch(setTotalStrength([]));
      dispatch(setCurrentVideo(0));
      dispatch(setForceBegin(false));
      dispatch(setVideoEnded(false));
      dispatch(common.setResetFocusState(true));
    };
  },
  resetBallForceWar: () => {
    return (dispatch) => {
      dispatch(setUpdateSlider(0));
      dispatch(setCurrentVideo(0));
      dispatch(setForceBegin(false));
      dispatch(setVideoEnded(false));

      dispatch(common.setResetFocusState(true));
    };
  },
  onDropElement: (_data) => {
    return (dispatch, getState) => {
      const {
        getTotalStrength,
        getDropZones,
        getAccessibleListVisible,
        getCurrentDraggable,
      } = getState();
      if (getAccessibleListVisible) {
        dispatch(
          setTotalStrength([...getTotalStrength, getDropZones[0].content])
        );
        let _ariaLiveText = `${getCurrentDraggable} ${data.liveDropText} ${getDropZones[0].label}`;

        if (isAndroid || isIOS || isMacOs) {
          setTimeout(() => {
            dispatch(common.thunks.ariaLiveAssertive(_ariaLiveText));
          }, 200);
        } else {
          dispatch(common.thunks.ariaLiveAssertive(_ariaLiveText));
        }
      } else {
        dispatch(setTotalStrength([...getTotalStrength, _data]));
      }
    };
  },
  videoAriaLive: () => {
    return (dispatch, getState) => {
      const { getCurrentVideo, getUpdateSlider, getLevel } = getState();
      let _ariaLiveText = "";
      if (getLevel == 1) {
        _ariaLiveText = data.tugOfWarVideos[getCurrentVideo - 1].liveText;
      } else {
        _ariaLiveText = data.ballForceVideos[getUpdateSlider].liveText;
      }
      if (isAndroid || isIOS || isMacOs) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(_ariaLiveText));
        }, 200);
      } else {
        dispatch(common.thunks.ariaLiveAssertive(_ariaLiveText));
      }
    };
  },

  tugOfWarPopupReset: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      currentPopup.forEach((element) => dispatch(common.togglePopup(element)));
      dispatch(setVideoEnded(true));
      dispatch(common.togglePopup(4));
    };
  },
};
