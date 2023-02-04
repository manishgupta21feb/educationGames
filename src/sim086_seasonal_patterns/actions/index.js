import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

import data from "../data";
export const common = { ...actions };
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;
export const IS_RESET_BUTTON_DISABLE = "IS_RESET_BUTTON_DISABLE";

export const GLOBAL_SELECTED_TAB = "GLOBAL_SELECTED_TAB";
export const BAR_CHART1 = "BAR_CHART1";
export const LINE_CHART2 = "LINE_CHART2";
export const LINE_CHART1 = "LINE_CHART1";
export const BAR_CHART2 = "BAR_CHART2";
export const SEASON_LABELS = "SEASON_LABELS";
export const IS_VISITED_TAB = "IS_VISITED_TAB";

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

export const getSeasonLabels = (val) => {
  return {
    type: SEASON_LABELS,
    val,
  };
};

export const getCurrentLineChart2 = (val) => {
  return {
    type: LINE_CHART2,
    val,
  };
};

export const getCurrentLineChart1 = (val) => {
  return {
    type: LINE_CHART1,
    val,
  };
};

export const getCurrentBarChart2 = (val) => {
  return {
    type: BAR_CHART2,
    val,
  };
};

export const getCurrentBarChart1 = (val) => {
  return {
    type: BAR_CHART1,
    val,
  };
};

export const setGlobalTabs = (items) => ({
  items,
  type: GLOBAL_SELECTED_TAB,
});

export const thunks = {
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));

      dispatch(setGlobalTabs(0));
      dispatch(getCurrentBarChart2(0));
      dispatch(getCurrentBarChart1(0));
      dispatch(getCurrentLineChart1(0));
      dispatch(getCurrentLineChart2(0));
      dispatch(getSeasonLabels(0));
      dispatch(isResetButtonDisable(true));
      EventManager.broadcast("SECONDARY_CLICK");
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();

      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },
  setGlobalTab: (item) => (dispatch, getState) => {
    dispatch(setGlobalTabs(item));
    dispatch(getCurrentBarChart2(item));
    dispatch(getCurrentBarChart1(item));
    dispatch(getCurrentLineChart1(item));
    dispatch(getCurrentLineChart2(item));
    dispatch(getSeasonLabels(item));
    dispatch(isResetButtonDisable(false));
    dispatch(isVisitedTab(item));
    let { setIsVisitedTab } = getState();
    EventManager.broadcast("SECONDARY_CLICK");

    TincanManager.data.completed = setIsVisitedTab.length == 4 ? true : false;
    TincanManager.data.percentage = (setIsVisitedTab.length / 4) * 100;
    TincanManager.saveTincanData();
  },
};
