import * as actions from "../../app/actions";
import data from "../data/index";
export const common = { ...actions };

export const UPDATE_VISITED = "UPDATE_VISITED";
export const updateVisited = (val) => ({ val, type: UPDATE_VISITED });

export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });

export const ON_SCREEN2_RESET = "ON_SCREEN2_RESET";
export const onScreen2Reset = () => ({ type: ON_SCREEN2_RESET });

export const ON_SCREEN_UPDATE = "ON_SCREEN_UPDATE";
export const onScreenUpdate = (val) => ({ val, type: ON_SCREEN_UPDATE });

export const thunks = {
  onNextClick: (val) => {
    return (dispatch, getState) => {
      const { showToastMessage } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(updateToastMsg(""));
      if (showToastMessage) {
        dispatch(common.toggleToastMessage(false));
      }
      dispatch(common.setResetFocusState(true));
      dispatch(common.onChangeScreen(val));
    };
  },

  reset: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(common.togglePopup(1));
      dispatch(common.thunks.onChangeScreen(0));
      dispatch(common.setResetFocusState(true));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.toggleToastMessage(false));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
    };
  },
};