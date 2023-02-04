import { togglePopup } from ".";
import data from "../data";
export const DEMO_ACTION = "DEMO_ACTION";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const UPDATE_VISITED_NODE = "UPDATE_VISITED_NODE";
export const SET_RESET_BUTTON_STATE = "SET_RESET_BUTTON_STATE";
export const RESET_VISITED_NODE = "RESET_VISITED_NODE";
export const scaleChange = () => ({ type: DEMO_ACTION });
export const selectHotspot = (id) => ({ id, type: SELECT_HOTSPOT });
export const setResetBtnState = (button) => ({
  button,
  type: SET_RESET_BUTTON_STATE,
});
export const updateVisitedNodes = (node) => ({
  node,
  type: UPDATE_VISITED_NODE,
});

export const resetVisitedNodes = () => ({
  type: RESET_VISITED_NODE,
});


export const thunk = {
  activityLoaded: () => {
    return (dispatch) => {
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      const { visitedNodes} = getState();
      dispatch(selectHotspot(""));
      dispatch(setResetBtnState(true));
      dispatch(resetVisitedNodes());
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      dispatch(togglePopup(1));
    };
  },
  selectHotspot: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState, visitedNodes, selectedHotspot } = getState();
      let _id = id;
      if (selectedHotspot == id) {
        _id = "";
      }
      dispatch(selectHotspot(_id));
      if (resetBtnState) {
        dispatch(setResetBtnState(false));
      }
      if (id && visitedNodes.indexOf(id) == -1) {
        dispatch(updateVisitedNodes(id));
      }
      const { visitedNodes: vNodes } = getState();
      if (vNodes.length == data.hotspots.length) {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },
};
