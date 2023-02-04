import * as actions from "../../app/actions";
import data from "../data";

export const TOGGLE_RESET = "TOGGLE_RESET";
export const ELEMENT_DATA = "ELEMENT_DATA";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const UPDATE_VISITED = "UPDATE_VISITED";

export const common = { ...actions };
export const doReset = () => ({ type: TOGGLE_RESET });
export const updateVisited = (val) => ({ val, type: UPDATE_VISITED });
export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });
export const updateElementData = (val) => ({ val, type: ELEMENT_DATA });

//helper
export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const thunk = {
  fetchQuestion: (data) => {
    return (dispatch) => {
      dispatch(updateElementData(helper.shuffleArray(data)));
    };
  },
  doReset: (value) => {
    return (dispatch) => {
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(common.togglePopup(value));
      dispatch(common. togglePopup(1));
      dispatch(common.onChangeScreen(0));
      dispatch(common.setResetFocusState(true));
      dispatch(common.updateResetBtnState(false));
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
  onContinue: (value) => {
    return (dispatch, getState) => {
      const { currentScreen } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.togglePopup(value));
      EventManager.broadcast("COMPLETION_SCREEN");
      dispatch(common.toggleToastMessage(false));
      TincanManager.data.percentage = parseInt((currentScreen+1)/3 * 100);
      if (parseInt((currentScreen+1)/3 * 100) === 100) {
        TincanManager.data.completed = true;
      }
      TincanManager.saveTincanData();
    };
  },
};
