import * as actions from "../../app/actions";
import data from '../data';
const { 
  toggleToastMessage, 
  togglePopup, 
  updateResetBtnState 
} = actions;

export const SET_DRAGGABLES = "SET_DRAGGABLES";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const SET_GLASS = "SET_GLASS";
export const SET_IS_DROPPED = "SET_IS_DROPPED";
export const SET_TIMER_STATUS = "SET_TIMER_STATUS";
export const SET_IS_NEXT = "SET_IS_NEXT";
export const SET_GRAPH_VALUES = "SET_GRAPH_VALUES";
export const SET_START_ACTIVITY = "SET_START_ACTIVITY";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const SET_ZINDEX_STATUS = "SET_ZINDEX_STATUS";

export const selectDraggable = (data) => ({
  type: SELECT_DRAGGABLE,
  data
});
export const setDraggableItems = (draggables) => ({
  type: SET_DRAGGABLES,
  draggables
});
export const setGlass = (glassType) => ({
  type: SET_GLASS,
  glassType
});
export const setIsDropped = (value) => ({
  type: SET_IS_DROPPED,
  value
});
export const setTimerStatus = (status) => ({
  type: SET_TIMER_STATUS,
  status
});
export const setIsNext = (status) => ({
  type: SET_IS_NEXT,
  status
});
export const setStartActivity = (status) => ({
  type: SET_START_ACTIVITY,
  status
});
export const updateAccessibleList = (status) => ({
  type: ACCESSIBLE_LIST_VISIBLE,
  status
});
export const setzindexStatus = (status) => ({
  type: SET_ZINDEX_STATUS,
  status
});

export const thunks = {
  
  handleNextButtonClick: () => {
    return (dispatch, state) => {

    dispatch(setIsDropped(false));
    dispatch(selectDraggable(null));
    dispatch(setGlass("blank-glass"));
    dispatch(setTimerStatus(true));
    dispatch(setIsNext(true));  
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 100);

    }
  },

  updateAccessiableValue: () => {
    return (dispatch, state) => {
      const { selectedDraggable } = state();
      dispatch(setGlass(selectedDraggable));
      dispatch(setIsDropped(true));
      dispatch(updateResetBtnState(false));
    }
  },

  resetActivity: () => {
    return (dispatch, state) => {
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(toggleToastMessage(false));
      dispatch(setIsDropped(false));
      dispatch(selectDraggable(null));
      dispatch(setGlass("blank-glass"));
      dispatch(setTimerStatus(true));
      dispatch(setIsNext(true));
      dispatch(setStartActivity(false));
      const { currentPopup } = state();
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
    }
  },

  selectDraggable: (data) => (dispatch, getState) => {
    dispatch(selectDraggable(data));
  },

  setDropzoneLiveText: () => {
    return (dispatch, state) => {

      const { selectedDraggable } = state();

      const currentLiveText = data.indicatorAriaLabel.filter((item) => item.id == selectedDraggable.id);

      dispatch(common.ariaLiveText(currentLiveText[0].liveText));
     
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 150);
    
    }
  }

}

export const common = { ...actions };
