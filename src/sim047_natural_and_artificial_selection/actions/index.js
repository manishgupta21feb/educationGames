import * as actions from "../../app/actions";
import data from "../data/index";
export const common = { ...actions };

export const SELECTED_TAB_INDEX = "SELECTED_TAB_INDEX";
export const ACTIVE_INDEX = "ACTIVE_INDEX";
export const UPDATE_SLIDER_NATURAL_SELECTION =
  "UPDATE_SLIDER_NATURAL_SELECTION";
export const FETCH_SCREEN_DATA = "FETCH_SCREEN_DATA";
export const SELECT_TIMELINE_INFO = "SELECT_TIMELINE_INFO";
export const RESET_SCREEN_DATA = "RESET_SCREEN_DATA";
export const DISABLE_BUTTON_INDEX = "DISABLE_BUTTON_INDEX";
export const TOGGLE_DIALOG = "TOGGLE_DIALOG";
export const TIMELINE_VISITED = "TIMELINE_VISITED";
export const RESET_TIMELINE_VISITED = "RESET_TIMELINE_VISITED";
export const SET_VISITED_FIRST = "SET_VISITED_FIRST";
export const TRAVSED_ARRAY_1 = "TRAVSED_ARRAY_1";
export const TRAVSED_ARRAY_2 = "TRAVSED_ARRAY_2";
export const RESET_ARRAY_1 = "RESET_ARRAY_1";
export const RESET_ARRAY_2 = "RESET_ARRAY_2";
export const SET_SLIDER_DISABLE = "SET_SLIDER_DISABLE";
export const SET_FOCUS = "SET_FOCUS";

export const setFocus = (data) => ({
  type: SET_FOCUS,
  payload: data,
});

export const setSliderState = (data) => ({
  type: SET_SLIDER_DISABLE,
  payload: data,
});
export const selectTab = (index = 0) => ({
  type: SELECTED_TAB_INDEX,
  payload: index,
});
export const setActiveClass = (index = 0) => ({
  type: ACTIVE_INDEX,
  payload: index,
});
export const updateSlider = (val) => ({
  type: UPDATE_SLIDER_NATURAL_SELECTION,
  payload: val,
});

export const getScreenData = (data) => ({
  type: FETCH_SCREEN_DATA,
  payload: data,
});
export const getSelectedTimeline = (index = 0) => ({
  type: SELECT_TIMELINE_INFO,
  payload: index,
});
export const resetTimeline = () => ({
  type: RESET_SCREEN_DATA,
});
export const setDisableButton = (index) => ({
  type: DISABLE_BUTTON_INDEX,
  payload: index,
});

export const toggleTimelineDialog = (value = false) => ({
  type: TOGGLE_DIALOG,
  payload: value,
});

export const addTimelineVisted = (item) => ({
  type: TIMELINE_VISITED,
  payload: item,
});
export const resetTimelineVisit = () => ({
  type: RESET_TIMELINE_VISITED,
});
export const setVisitedFirst = (data) => ({
  type: SET_VISITED_FIRST,
  payload: data,
});
export const trackArray1 = (data) => ({
  type: TRAVSED_ARRAY_1,
  payload: data,
});

export const trackArray2 = (data) => ({
  type: TRAVSED_ARRAY_2,
  payload: data,
});
export const resetTrackArray1 = () => ({
  type: RESET_ARRAY_1,
});
export const resetTrackArray2 = () => ({
  type: RESET_ARRAY_2,
});

export const thunks = {
  selectTab: (id) => {
    return (dispatch, getState) => {
      dispatch(selectTab(id));
      dispatch(setSliderState(false));
      dispatch(setActiveClass(id));

      if (id == 0) {
        dispatch(getScreenData(data.timelineData1));
        dispatch(updateSlider(0));
      } else {
        dispatch(getScreenData(data.timelineData2));
        dispatch(updateSlider(0));
      }
    };
  },
  updateTimeline: (value) => {
    return (dispatch, getState) => {
      const { selectedTimeline, selectedTab } = getState();
      dispatch(updateSlider(value));
      if (selectedTab == 0) {
        dispatch(setDisableButton(1));
      } else {
        dispatch(setDisableButton(0));
      }
      dispatch(getSelectedTimeline(value));
      dispatch(thunks.checkUniqueness());
      dispatch(toggleTimelineDialog(false));
    };
  },
  checkUniqueness: () => {
    return (dispatch, getState) => {
      const { fetchTimeline, visitedTimeline, selectedTab, } = getState();
      if (fetchTimeline.selectedTimelineInfo) {
        let timelineCountExist = visitedTimeline.find(
          (item) =>
            item.travseralId == fetchTimeline.selectedTimelineInfo.travseralId
        );

        if (!timelineCountExist) {
          dispatch(addTimelineVisted(fetchTimeline.selectedTimelineInfo));
          if (selectedTab == 0) {
            dispatch(
              trackArray1(fetchTimeline.selectedTimelineInfo.travseralId)
            );
            
          } else {
            dispatch(
              trackArray2(fetchTimeline.selectedTimelineInfo.travseralId)
            );
         
          }
        }
      }
    };
  },
  next: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.togglePopup(4));
      EventManager.broadcast("COMPLETION_SCREEN");
    };
  },
  continuePressed: () => {
    return (dispatch, getState) => {
      const { selectedTab } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.setResetFocusState(true));
      dispatch(setVisitedFirst(selectedTab));
      dispatch(setDisableButton(-1));
      dispatch(setSliderState(false));
      dispatch(common.ariaLiveText(" "))
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      TincanManager.data.percentage =50;
      TincanManager.saveTincanData();
      if (selectedTab == 0) {
        dispatch(selectTab(1));
        dispatch(updateSlider(0));
        dispatch(setActiveClass(1));
        dispatch(getScreenData(data.timelineData2));
      } else {
        dispatch(selectTab(0));
        dispatch(updateSlider(0));
        dispatch(setActiveClass(0));
        dispatch(getScreenData(data.timelineData1));
      }
    };
  },
  setLiveText: (_sliderId) => {
    return (dispatch, getState) => {
      const { selectedTab } = getState();
      let ariaLabelItems = selectedTab == 0 ? data.slider0.listitems : data.slider1.listitems;
      const liveText = ariaLabelItems.find(item => item.id == _sliderId);
      dispatch(common.ariaLiveText(liveText.altImg))
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "))
      }, 100);
    }
  },
  FinishedPressed: () => {
    return (dispatch, getState) => {
      const { selectedTab } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.togglePopup(5));
      EventManager.broadcast("COMPLETION_SCREEN");
      TincanManager.data.percentage = 100;
      TincanManager.data.completed = true;
      TincanManager.saveTincanData();
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(selectTab(0));
      dispatch(updateSlider(0));
      dispatch(setDisableButton(-1));
      dispatch(getScreenData(data.timelineData1));
      dispatch(resetTimelineVisit());
      dispatch(resetTrackArray1());
      dispatch(resetTrackArray2());
      dispatch(setVisitedFirst(-1));
      dispatch(setActiveClass(0));
      dispatch(setSliderState(false));
      dispatch(toggleTimelineDialog());
      dispatch(common.ariaLiveText(data.resetLiveText));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(common.togglePopup(3));
      }
      if (currentPopup.indexOf(5) >= 0) {
        dispatch(common.togglePopup(5));
      }
    };
  },
};
