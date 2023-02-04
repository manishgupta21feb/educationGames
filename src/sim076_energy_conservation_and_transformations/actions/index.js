import * as actions from "../../app/actions";
import data from "../data";
export const DEMO_ACTION = "DEMO_ACTION";
export const GET_SCREEN = "GET_SCREEN";
export const FETCH_HOTSPOTS = "FETCH_HOTSPOTS";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const GET_COUNT = "GET_COUNT";
export const TOGGLE_SCREEN = "TOGGLE_SCREEN";
export const ACTIVITY_START = "ACTIVITY_START";
export const VIDEO_ENDED = "VIDEO_ENDED";
export const CHANGE_SRC = "CHANGE_SRC";
export const RESET_HOTSPOTS = "RESET_HOTSPOTS";
export const UPDATE_HOTSPOT_SEQUENCE = "UPDATE_HOTSPOT_SEQUENCE";
export const ADD_ARROW_STEPS='ADD_ARROW_STEPS';
export const RESET_ARROWS='RESET_ARROWS';
export const SHOW_LABELS='SHOW_LABELS';

export const common = { ...actions };

export const getScreen = (val = 0) => ({
  type: GET_SCREEN,
  payload: val,
});
export const getHotspots = (hotspotsData) => ({
  type: FETCH_HOTSPOTS,
  payload: hotspotsData,
});

export const getActiveHotspot = (val = 0) => ({
  type: SELECT_HOTSPOT,
  payload: val,
});
export const getCount = (count = 0) => ({
  type: GET_COUNT,
  payload: count,
});

export const toggleScreen = (val) => ({
  type: TOGGLE_SCREEN,
  payload: val,
});
export const startActivity = (val) => ({
  type: ACTIVITY_START,
  payload: val,
});
export const videoEnded = (val) => ({
  type: VIDEO_ENDED,
  payload: val,
});
export const changeSrc = (val) => ({
  type: CHANGE_SRC,
  payload: val,
});
export const resetHotspots = () => ({
  type: RESET_HOTSPOTS,
});

export const updateScreenSequence = (sequence) => ({
  sequence,
  type: UPDATE_HOTSPOT_SEQUENCE,
});
export const addArrowSteps =(step)=>({
  type:ADD_ARROW_STEPS,
  payload: step
});

export const resetArrowSteps=()=>({
  type:RESET_ARROWS
});
export const setShowLabels=(val)=>({
   type:SHOW_LABELS,
   payload:val
});
export const thunks = {
  launchActivity: () => {
    return (dispatch, getState) => {
      const { getHotspotCount } = getState();
      dispatch(common.togglePopup(1));
      dispatch(getHotspots(data.screen0Hotspots));
      dispatch(getActiveHotspot(getHotspotCount));
      dispatch(getScreen(0));
    };
  },
  hotspotClicked: () => {
    return (dispatch, getState) => {
      const { getScreen } = getState();
      if (getScreen == 0) {
        dispatch(common.updateResetBtnState(false));
        dispatch(videoEnded(false));
      }
      dispatch(common.setResetFocusState(true));
      dispatch(toggleScreen(true));
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 50);
    };
  },
  onButtonPressed: () => {
    return (dispatch, getState) => {
      const { getHotspotCount, getScreen, hotspotSequence } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.setResetFocusState(true));
      if (getHotspotCount < 2) {
        const _hotspotSequence = [...hotspotSequence];
        _hotspotSequence.splice(0, 1);
        dispatch(updateScreenSequence(_hotspotSequence));
        dispatch(toggleScreen(false));
        dispatch(getActiveHotspot(getHotspotCount + 1));
        dispatch(getCount(getHotspotCount + 1));
        if(getScreen==1){
          let arrowCount=getHotspotCount + 1
          dispatch(addArrowSteps(arrowCount))
        }
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 50);
      } else {
        if (getScreen == 0) {
          dispatch(videoEnded(false));
          //to show full cirucit video, change video sr file
          dispatch(changeSrc(true));
        } else {
          //for screen 2, activate completion popup on finish click

          dispatch(common.togglePopup(5));
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.percentage = 100;
          TincanManager.data.completed = true;
          TincanManager.saveTincanData();
        }
      }
    };
  },
  transtionContinuePressed: () => {
    return (dispatch, getState) => {
      dispatch(getScreen(1));
      dispatch(common.togglePopup(4));
      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();
      dispatch(resetHotspots());
      dispatch(getCount(0));
      dispatch(changeSrc(false));
      const { getHotspotCount } = getState();
      dispatch(getHotspots(data.screen1Hotspots));
      dispatch(getActiveHotspot(getHotspotCount));
      dispatch(updateScreenSequence([...data.screen1HotspotSequence]));
      dispatch(toggleScreen(false));
    
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 50);
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(setShowLabels(false));
      dispatch(startActivity(false));
      dispatch(toggleScreen(false));
      dispatch(getScreen(0));
      dispatch(videoEnded(false));
      dispatch(changeSrc(false));
      dispatch(getHotspots(data.screen0Hotspots));
      dispatch(updateScreenSequence([...data.screen0HotspotSequence]));
      dispatch(getActiveHotspot(0));
      dispatch(getCount(0));
      dispatch(resetArrowSteps());
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
  setVideoLiveText: () => {
    return (dispatch, getState) => {
      const { isVideoEnded, showFullCircuit, fetchHotspots,hotspotSequence } = getState();
      const activeHotspot = fetchHotspots.allHotspot.filter(
        (a) =>
          hotspotSequence &&
          hotspotSequence.length &&
          a.id == hotspotSequence[0]
      )[0];
      if(activeHotspot.id=="hotspot2"){
        dispatch(setShowLabels(false))
        setTimeout(()=>{
          dispatch(setShowLabels(true))

        },2000)
      }
      if (!showFullCircuit) {
        dispatch(videoEnded(false));
        dispatch(
          common.thunks.ariaLiveText(
            activeHotspot.assets.alt
          )
        );
      } 
      if (showFullCircuit) {
        dispatch(videoEnded(false));
        dispatch(common.thunks.ariaLiveText(data.fullCircuit.alt));
      }
    };
  },
};
