import * as actions from "../../app/actions";
import data from "../data";

export const common = { ...actions };
export const HOTSPOTS = "HOTSPOTS";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const SHOW_VIDEO_DATA = "SHOW_VIDEO_DATA";
export const VIDEO_ENDED = "VIDEO_ENDED";
export const GET_SCREEN = "GET_SCREEN";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const ELEMENT_DATA = "ELEMENT_DATA";
export const SELECT_DRAGGABLE="SELECT_DRAGGABLE";
export const DISABLE_DRAGGABLE = "DISABLE_DRAGGABLE";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const RESET_MATCHED_ITEMS='RESET_MATCHED_ITEMS';
export const TOAST_MESSAGE="TOAST_MESSAGE"
export const SET_VIDEO_STATE = "SET_VIDEO_STATE";
export const TOGGLE_VIDEO_STATE = "TOGGLE_VIDEO_STATE";

export const hotspots = (val) => ({
  type: HOTSPOTS,
  payload: val,
});
export const selectHotspot = (id) => ({
  type: SELECT_HOTSPOT,
  payload: id,
});
export const updateVisitedHotspot = (updateHotspot) => ({
  type: UPDATE_VISITED_HOTSPOTS,
  payload: updateHotspot,
});

export const showVideoData = (val) => ({
  type: SHOW_VIDEO_DATA,
  payload: val,
});
export const videoEnded = (val) => ({
  type: VIDEO_ENDED,
  payload: val,
});

export const setScreen = (num) => ({
  type: GET_SCREEN,
  payload: num,
});
export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});
export const updateElementData = (val) => ({
  type: ELEMENT_DATA,
  payload: val,
});
export const selectDraggable = (val) => ({
  
  type: SELECT_DRAGGABLE,
  payload:val,
});
export const disableDraggable = (answerId, isDisable = false) => ({
  type: DISABLE_DRAGGABLE,
  data: { answerId, isDisable },
});
export const addMatchedItem = (item) => ({
  item,
  type: ADD_MATCHED_ITEM,
});
export const updateToastMsg = (val) => ({ type: TOAST_MESSAGE,payload:val });
export const resetMatchedItem = () => ({ type: RESET_MATCHED_ITEMS });
export const setVideoState = (videoState) => ({
  type: SET_VIDEO_STATE,
  videoState,
});

export const toggleVideoState = () => ({ type: TOGGLE_VIDEO_STATE });
const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};
export const thunks = {
  fetchElements: () => {
    return (dispatch, getState) => {
      dispatch(
        updateElementData(
          helper.shuffleArray([...data.venDiagramData.elements])
        )
      );
    };
  },
  selectHotspot: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      let _id = id;
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      dispatch(common.setResetFocusState(true));
      dispatch(selectHotspot(_id));
      dispatch(showVideoData(true));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    
    };
  },
  videoContinuePressed: () => {
    return (dispatch, getState) => {
      const { hotspots, selectedHotspot: id } = getState();
      dispatch(common.setResetFocusState(true));
      EventManager.broadcast("SECONDARY_CLICK");
      const updatedHotspotsData = hotspots.map((x) =>
        x.id === id ? { ...x, visited: true } : x
      );
      dispatch(updateVisitedHotspot(updatedHotspotsData));
      dispatch(showVideoData(false));
      dispatch(videoEnded(false));
      dispatch(setVideoState(false));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(selectHotspot(""));

    };
  },
  transtionContinuePressed: () => {
    return (dispatch) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.togglePopup(4));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(setScreen(2));
    };
  },
  checkDroppedItem: (dropzone) => (dispatch, getState) => {
    const {
      selectedDraggable: { value,target },
    } = getState();

    if (target) {
      //console.log(dropzone,"target---->",target,"value---->",value,"dropzone.answerId ",dropzone.answerId );
      if (dropzone.answerId == target) {
        dispatch(addMatchedItem({ ...getState().selectedDraggable }));
        dispatch(disableDraggable(value, true));
        dispatch(updateToastMsg("correct"));
        dispatch(common.toggleToastMessage(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");

      } else {
        dispatch(updateToastMsg("incorrect"));
        dispatch(common.toggleToastMessage(true));
         EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    }
    // dispatch(updateResetBtnState(false));
    dispatch(selectDraggable(null));
    dispatch(updateAccessibleList(false));

  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(resetMatchedItem());
      dispatch(updateAccessibleList(false));
      dispatch(updateToastMsg(""));
      dispatch(setVideoState(false))
      dispatch(showVideoData(false));
      dispatch(videoEnded(false));
      dispatch(selectHotspot(""));
      dispatch(updateVisitedHotspot(data.hotspots));
      dispatch(setScreen(1));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(common.togglePopup(3));
      }
      if (currentPopup.indexOf(5) >= 0) {
        dispatch(common.togglePopup(5));
      }
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
    };
  },
  onDrop: (accept) => (dispatch, getState) => {
    const { selectDraggableFull: source } = getState();
    const object = {
      source,
      target: accept,
    };
    dispatch(disableDraggable(source, true));
    dispatch(selectDraggable(null));
    dispatch(updateAccessibleList(false));
  },
  finishPressed:() =>(dispatch,getState)=>{
    EventManager.broadcast("STOP_ALL");
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK")
    dispatch(common.togglePopup(5));
    EventManager.broadcast("COMPLETION_SCREEN");
  },
  setVideoLiveText: () => {
    return (dispatch, getState) => {
      const { isVideoEnded,hotspots,selectedHotspot } = getState();
      const activeHotspot =  hotspots.find(
        (a) =>a.id==selectedHotspot);
      if (isVideoEnded) {
        dispatch(videoEnded(false));
        dispatch(common.thunks.ariaLiveText(activeHotspot.details.videoEndLiveText));
      }
    };
  },
};
