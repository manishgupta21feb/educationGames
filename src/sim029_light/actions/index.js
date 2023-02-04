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

export const IS_ACCESSIBLE = "IS_ACCESSIBLE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SET_DRAGGABLES = "SET_DRAGGABLES";
export const ADD_DROPPED_ITEM = "ADD_DROPPED_ITEM";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const ADD_DRAGGABLE_ITEM = "ADD_DRAGGABLE_ITEM";
export const SET_ACTIVE_DROPZONE = "SET_ACTIVE_DROPZONE";
export const RESET_DROPPED_ITEMS = "RESET_DROPPED_ITEMS";
export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";

export const selectDraggable = (data) => ({
  type: SELECT_DRAGGABLE,
  data,
});

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const setAccessible = (accessible) => ({
  accessible,
  type: IS_ACCESSIBLE,
});

export const setDraggables = (draggables) => ({
  draggables,
  type: SET_DRAGGABLES,
});

export const addDroppedItem = (droppedId) => ({
  droppedId,
  type: ADD_DROPPED_ITEM,
});

export const resetDroppedItems = () => ({ type: RESET_DROPPED_ITEMS });

export const setActiveDropzone = (dropzone) => ({
  dropzone,
  type: SET_ACTIVE_DROPZONE,
});

export const setActivityCompleted = (completed) => ({
  completed,
  type: SET_ACTIVITY_COMPLETED,
});

export const thunks = {
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(resetDroppedItems());
      dispatch(selectDraggable(null));
      dispatch(updateResetBtnState(true));
      dispatch(setActivityCompleted(false));
      setDraggables(data.draggables.map((d) => ({ ...d })));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      dispatch(setActiveDropzone(data.dropzones[0].id));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },
  checkDrop: (item) => (dispatch, getState) => {
    const { selectedDraggable, activeDropzone } = getState();
    const { target } = item;
    const { source } = selectedDraggable;
    if (source.includes(target)) {
      dispatch(addDroppedItem(activeDropzone));
      const index = data.dropzones.findIndex((d) => d.id == activeDropzone);
      const newActiveDropzone = data.dropzones[index + 1];
      if (newActiveDropzone && newActiveDropzone.id) {
        dispatch(setActiveDropzone(newActiveDropzone.id));
      }
      const { droppedItems } = getState();
      if (droppedItems.length == 4) {
        dispatch(setActivityCompleted(true));
        TincanManager.data.completed = true;
      }
      TincanManager.data.percentage = (droppedItems.length / 4) * 100;
      TincanManager.saveTincanData();
      dispatch(toggleToastMessage(true));
      dispatch(updateToastMsg("correct"));
      EventManager.broadcast("POSITIVE_FEEDBACK");
    } else {
      dispatch(toggleToastMessage(true));
      dispatch(updateToastMsg("incorrect"));
      EventManager.broadcast("NEGATIVE_FEEDBACK");
    }
    dispatch(selectDraggable(null));
  },
  selectDraggable: (item) => (dispatch, getState) => {
    dispatch(selectDraggable(item));
    const { resetBtnState } = getState();
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },
};
