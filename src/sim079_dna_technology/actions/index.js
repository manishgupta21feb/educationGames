import data from "../data";
import * as actions from "../../app/actions";
const { togglePopup } = actions;
export const ACTIVITY_START = "ACTIVITY_START";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const SET_DATA = "SET_DATA";
export const VISITED_HOTSPOT = "VISITED_HOTSPOT";
export const common = { ...actions };
export const RESET_VISITED_HOTSPOT = "RESET_VISITED_HOTSPOT";
export const setData = (data) => ({ data, type: SET_DATA });

export const setActivityStart = (val) => {
  return { type: ACTIVITY_START, val };
};
export const selectHotspot = (id) => {
  return { type: SELECT_HOTSPOT, id };
};
export const buttonClicked = (action) => {
  return { type: BUTTON_CLICKED, action };
};
export const visitedHotspot = (data) => {
  return { type: VISITED_HOTSPOT, data };
};
export const resetVisitedHotspot = () => {
  return { type: RESET_VISITED_HOTSPOT };
};

export const thunks = {
  selectHotspot: (val) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
        dispatch(selectHotspot(val));
        dispatch(visitedHotspot(val));
        const _data = { ...data.mcqData.filter((d) => d.id == val)[0] };
        dispatch(setData(_data));
      });
    };
  },
  handleNextButtonClick: () => {
    return (dispatch, getState) => {
      const { setVisitedData } = getState();

      TincanManager.data.completed = setVisitedData.length == 3 ? true : false;
      TincanManager.data.percentage = (setVisitedData.length / 3) * 100;
      TincanManager.saveTincanData();

      dispatch(selectHotspot(""));

      dispatch(common.setResetFocusState(true));
    };
  },
  resetActivity: () => {
    return (dispatch) => {
      dispatch(selectHotspot(""));
      dispatch(common.updateResetBtnState(true));

      setTimeout(() => {
        dispatch(common.togglePopup(1));
      }, 150);
      dispatch(resetVisitedHotspot());
      TincanManager.data.completed = false;

      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },

  onInfoClose: () => {
    return (dispatch, getState) => {
      const {} = getState();
      dispatch(togglePopup(4));
    };
  },
};
