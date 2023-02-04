import * as actions from "../../app/actions";
import simData from "../data";

export const common = { ...actions };

export const CURRENT_SECTION = "CURRENT_SECTION";
export const DROP_DOWN_DATA = "DROP_DOWN_DATA";
export const SLIDER_DATA = "SLIDER_DATA";
export const ANIMATION_START = "ANIMATION_START";
export const FREEZE_PANEL = "FREEZE_PANEL";
export const RESET_DROP_DATA = "RESET_DROP_DATA";
export const ONCE_DONE_ANIM = "ONCE_DONE_ANIM";
export const PART_DONE = "PART_DONE";

import { isAndroid, isIOS, isMacOs } from "react-device-detect";

export const setCurrentSection = (loc) => {
  return {
    type: CURRENT_SECTION,
    loc,
  };
};

export const setDropDownData = (data, location) => {
  return {
    type: DROP_DOWN_DATA,
    data,
    location,
  };
};
export const resetDropDownData = (data) => {
  return {
    type: RESET_DROP_DATA,
    data,
  };
};
export const setUpdateSlider = (data) => {
  return {
    type: SLIDER_DATA,
    data,
  };
};

export const setAnimationStart = (data) => {
  return {
    type: ANIMATION_START,
    data,
  };
};

export const setFreezePanel = (data) => {
  return {
    type: FREEZE_PANEL,
    data,
  };
};
export const setOnceDone = (data) => {
  return {
    type: ONCE_DONE_ANIM,
    data,
  };
};

export const setAnyPartPlayed = (data) => {
  return {
    type: PART_DONE,
    data,
  };
};

export const thunk = {
  resetSection: () => {
    return (dispatch, getState) => {
      dispatch(setCurrentSection("launch"));
      dispatch(common.setResetFocusState(false));
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 200);

      dispatch(resetDropDownData([{}, {}]));
      dispatch(setUpdateSlider(0));
      dispatch(setAnimationStart(false));
      dispatch(setFreezePanel(false));
      dispatch(setOnceDone(false));
    };
  },
  liveContentAnnouncer: () => {
    return (dispatch, getState) => {
      const { getUpdateSlider, getDropDownData, getCurrentSection } =
        getState();

      const currentSide = getDropDownData[1].text;
      const _data =
        simData[getCurrentSection].ariaLiveContent[currentSide][
          getUpdateSlider
        ];

      if (isAndroid || isIOS || isMacOs) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(_data));
        }, 200);
      } else {
        dispatch(common.thunks.ariaLiveAssertive(_data));
      }
    };
  },
};
