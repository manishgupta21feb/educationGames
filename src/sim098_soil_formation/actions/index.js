import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

import data from "../data";
export const common = { ...actions };
const { togglePopup, ariaLiveText, updateResetBtnState } = actions;

export const IS_RESET_BUTTON_DISABLE = "IS_RESET_BUTTON_DISABLE";
export const GLOBAL_SELECTED_TAB = "GLOBAL_SELECTED_TAB";
export const IS_VISITED_TAB = "IS_VISITED_TAB";
export const SOIL_SECTION = "SOIL_SECTION";

export const isResetButtonDisable = (data) => {
  return {
    type: IS_RESET_BUTTON_DISABLE,
    data,
  };
};

export const isVisitedTab = (data) => {
  return {
    type: IS_VISITED_TAB,
    data,
  };
};

export const setGlobalTabs = (items) => ({
  items,
  type: GLOBAL_SELECTED_TAB,
});

export const soilSection = (items) => ({
  items,
  type: SOIL_SECTION,
});

export const thunks = {
  resetActivity: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(soilSection(true));
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(setGlobalTabs(0));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      dispatch(soilSection(false));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
        dispatch(updateResetBtnState(true));
      }, 300);
    };
  },
  setGlobalTab: (item) => (dispatch, getState) => {
    dispatch(setGlobalTabs(item));
    if (getState().resetBtnState) {
      dispatch(updateResetBtnState(false));
    }

    if (getState().selectedTab == 4) {
      dispatch(soilSection(true));
    } else {
      dispatch(soilSection(false));
    }
    dispatch(isResetButtonDisable(false));
    dispatch(isVisitedTab(item));
    let { setIsVisitedTab } = getState();
    EventManager.broadcast("SECONDARY_CLICK");
    TincanManager.data.completed = setIsVisitedTab.length == 5 ? true : false;
    TincanManager.data.percentage = (setIsVisitedTab.length / 5) * 100;
    TincanManager.saveTincanData();
  },

  setVideoLiveText: () => {
    return (dispatch, getState) => {
      dispatch(
        common.ariaLiveText(
          data.mainScreenData[getState().selectedTab].videoData.alt
        )
      );
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 150);
    };
  },
};
