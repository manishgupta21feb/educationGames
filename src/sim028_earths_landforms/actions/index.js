import data from "../data";
import * as actions from "../../app/actions";

export const common = { ...actions };

const { ariaLiveText, togglePopup, updateResetBtnState } = common;

export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const SELECT_LANDFORM = "SELECT_LANDFORM";
export const UPDATE_VISITED_NODE = "UPDATE_VISITED_NODE";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const SELECTED_HOTSPOT_OPTION = "SELECTED_HOTSPOT_OPTION";

export const selectHotspot = (id) => ({ id, type: SELECT_HOTSPOT });
export const updateVisitedNodes = (node) => ({
  node,
  type: UPDATE_VISITED_NODE,
});

export const selectLandform = (id) => ({
  id,
  type: SELECT_LANDFORM,
});

export const selectHotspotOption = (id) => ({
  id,
  type: SELECTED_HOTSPOT_OPTION,
});

export const updateVisitedHotspots = (hotspot) => ({
  hotspot,
  type: UPDATE_VISITED_HOTSPOTS,
});

export const resetVisitedHotspots = () => ({ type: RESET_VISITED_HOTSPOTS });

export const thunks = {
  activityLoaded: () => {
    return (dispatch) => {
      // TincanManager.saveTincanData();
      // TincanManager.resetTincanData();
    };
  },

  resetActivity: () => {
    return (dispatch) => {
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(resetVisitedHotspots());
      dispatch(togglePopup(1));
      dispatch(selectHotspot(""));
      dispatch(selectLandform("earth"));
      dispatch(selectHotspotOption(""));
      dispatch(updateResetBtnState(true));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },

  selectHotspot: (id) => {
    return (dispatch, getState) => {
      const { selectedHotspot } = getState();
      let _id = id;
      if (selectedHotspot == id) {
        _id = "";
      }
      dispatch(selectHotspot(_id));
      dispatch(selectHotspotOption(""));
    };
  },

  selectLandform: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState, selectedActionButton } = getState();
      dispatch(updateVisitedHotspots(id));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      if (id != selectedActionButton) {
        dispatch(selectLandform(id));
        dispatch(selectHotspotOption(""));
      }
      const { visitedHotspots } = getState();
      console.log("visitedHotspots: ", visitedHotspots);
      TincanManager.data.percentage = Math.round(
        (visitedHotspots.length / data.landforms.length) * 100
      );
      if (TincanManager.data.percentage == 100) {
        TincanManager.data.completed = true;
      }
      TincanManager.saveTincanData();
    };
  },

  selectHotspotOption: (id) => {
    return (dispatch, getState) => {
      const { selectedHotspotOption } = getState();
      if (id != selectedHotspotOption) {
        dispatch(selectHotspotOption(id));
      } else {
        dispatch(selectHotspotOption(""));
      }
    };
  },
};
