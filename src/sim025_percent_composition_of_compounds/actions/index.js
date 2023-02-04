import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
export const common = { ...actions };

const {
  ariaLiveText,
  toggleToastMessage,
  togglePopup,
  updateResetBtnState,
  setResetFocusState,
} = actions;

export const ELEMENT_DATA = "ELEMENT_DATA";
export const DROP_ELEMENT = "DROP_ELEMENT";
export const SET_VIEW_TYPE = "SET_VIEW_TYPE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const UPDATE_SHOW_NEXT = "UPDATE_SHOW_NEXT";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const UPDATE_SHOW_DROP = "UPDATE_SHOW_DROP";
export const SET_DRAGGABLE_ITEM = "SET_DRAGGABLE_ITEM";
export const UPDATE_SHOW_BUTTON = "UPDATE_SHOW_BUTTON";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const RESET_DRAGGABLE_ITEM = "RESET_DRAGGABLE_ITEM";
export const SET_HIDE_DROPPED_ITEM = "SET_HIDE_DROPPED_ITEM";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const ADD_SELECTED_ITEM_DETAILS = "ADD_SELECTED_ITEM_DETAILS";
export const RESET_SELECTED_ITEM_DETAILS = "RESET_SELECTED_ITEM_DETAILS";

export const updateElementData = (val) => ({ val, type: ELEMENT_DATA });
export const updateDropElement = (val) => ({ val, type: DROP_ELEMENT });

export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const updateShowNext = (val) => ({ val, type: UPDATE_SHOW_NEXT });

export const addMatchedItem = (key, item) => ({
  key,
  item,
  type: ADD_MATCHED_ITEM,
});

export const resetMatchedItem = () => ({ type: RESET_MATCHED_ITEMS });

export const setDraggableItem = (item) => ({
  item,
  type: SET_DRAGGABLE_ITEM,
});

export const resetDraggableItem = () => ({
  type: RESET_DRAGGABLE_ITEM,
});

export const addSelectedItemDetails = (itemDetails) => ({
  itemDetails,
  type: ADD_SELECTED_ITEM_DETAILS,
});

export const resetSelectedItemDetails = () => ({
  type: RESET_SELECTED_ITEM_DETAILS,
});

export const setShowDropZone = (val) => ({
  val,
  type: UPDATE_SHOW_DROP,
});

//helper
export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const setViewType = (view) => ({
  view,
  type: SET_VIEW_TYPE,
});

export const setButtonShow = (val) => ({
  val,
  type: UPDATE_SHOW_BUTTON,
});

export const setHideDroppedItem = (value) => ({
  value,
  type: SET_HIDE_DROPPED_ITEM,
});

export const thunks = {
  fetchElements: () => {
    return (dispatch, getState) => {
      const { selectedStage } = getState();
      dispatch(
        updateElementData(
          helper.shuffleArray(data.draggablesBurger.map((e) => ({ ...e })))
        )
      );
    };
  },
  resetGame: () => {
    return (dispatch, getState) => {
      dispatch(togglePopup(1));
      dispatch(
        updateElementData(
          helper.shuffleArray(data.draggablesBurger.map((e) => ({ ...e })))
        )
      );
      dispatch(setViewType("burger"));
      dispatch(updateDropElement({}));
      dispatch(updateResetBtnState(true));
      dispatch(updateAccessibleList(false));
      dispatch(updateShowNext(false));
      dispatch(ariaLiveText(" "));
      dispatch(resetDraggableItem());
      dispatch(resetSelectedItemDetails());
      dispatch(setButtonShow(false));
      // dispatch(addMatchedItem());
      dispatch(resetMatchedItem());
      EventManager.broadcast("SECONDARY_CLICK");
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
  onStageOneComplete: () => {
    return (dispatch, getState) => {
      dispatch(updateDropElement({}));
      dispatch(updateAccessibleList(false));
      dispatch(updateShowNext(false));
      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    };
  },
  matchDraggedItem: (dropZone) => {
    return (dispatch, getState) => {
      const { draggableItem } = getState();
      if (draggableItem) {
        dispatch(thunks.addMatchedItem(draggableItem));
        dispatch(resetDraggableItem());
        dispatch(
          ariaLiveText(
            data.onDroppedLiveText.replace(
              "-1-",
              draggableItem.split("_").join(" ")
            )
          )
        );
        dispatch(setResetFocusState(true));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    };
  },
  addMatchedItem: (key) => {
    return (dispatch, getState) => {
      const { resetBtnState, elementData } = getState();
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      dispatch(addMatchedItem(key));
      dispatch(setHideDroppedItem(false));
      dispatch(
        addSelectedItemDetails({
          ...elementData.filter((e) => e.id == key)[0],
        })
      );
    };
  },
  setViewType: (view) => {
    return (dispatch, getState) => {
      dispatch(setViewType(view));
      dispatch(resetMatchedItem());
      dispatch(resetDraggableItem());
      dispatch(resetSelectedItemDetails());
      dispatch(
        updateElementData(
          helper.shuffleArray(data.draggablesWater.map((e) => ({ ...e })))
        )
      );
    };
  },
  nextButtonClick: () => {
    return (dispatch, getState) => {
      const { viewType } = getState();
      if (viewType == "burger") {
        EventManager.broadcast("SECONDARY_CLICK");
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(common.togglePopup(4));
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 50;
        TincanManager.saveTincanData();  
      } else {
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(common.togglePopup(5));
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
  
      }
    };
  },
};
