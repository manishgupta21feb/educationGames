import * as actions from "../../app/actions";
import data from "../data";

export const SET_F1_VALUE = "SET_F1_VALUE";
export const SET_F2_VALUE = "SET_F2_VALUE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const RESET_SELECTED_F = "RESET_SELECTED_F";

export const SET_VIEW_VISITED = "SET_VIEW_VISITED";
export const setViewVisited = (value) => ({ value, type: SET_VIEW_VISITED });

export const doReset = () => ({ type: RESET_SELECTED_F });
export const setSelectedF1Value = (value) => ({ value, type: SET_F1_VALUE });
export const setSelectedF2Value = (value) => ({ value, type: SET_F2_VALUE });
export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const thunks = {
  updateSaveState: (value) => {
    return (dispatch, getState) => {
      const { viewVisited } = getState();
      if (viewVisited.length+1 < data.launchScreenButtons.length) {
        dispatch(setViewVisited(value));
        TincanManager.data.percentage = parseInt(
          (viewVisited.length+1 / data.launchScreenButtons.length) * 100
        );
      }
      if (viewVisited.length+1 === data.launchScreenButtons.length) {
        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
      }
      TincanManager.saveTincanData();
    };
  },
};

export const common = { ...actions };
