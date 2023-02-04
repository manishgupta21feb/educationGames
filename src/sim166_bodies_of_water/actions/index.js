import * as actions from "../../app/actions";
import data from "../data";
import { isAndroid } from "react-device-detect";

export const common = { ...actions };
export const HOTSPOTS = "HOTSPOTS";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const SHOW_VIDEO_DATA = "SHOW_VIDEO_DATA";
export const GET_SCREEN = "GET_SCREEN";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const ELEMENT_DATA = "ELEMENT_DATA";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const DISABLE_DRAGGABLE = "DISABLE_DRAGGABLE";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SET_ITEMS_MATCHED = "SET_ITEMS_MATCHED";
export const UPDATE_ITEMS_MATCHED = "UPDATE_ITEMS_MATCHED";
export const DROPPABLE_CHNAGE_STATE = "DROPPABLE_CHNAGE_STATE";
export const DROPPABLE_CHANGE_FALSE = "DROPPABLE_CHANGE_FALSE";
export const SET_STATIC = "SET_STATIC";
export const SET_PARTIALLY_CORRECT = "SET_PARTIALLY_CORRECT";

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
  val,
});
export const disableDraggable = (answerId, isDisable = false) => ({
  type: DISABLE_DRAGGABLE,
  data: { answerId, isDisable },
});
export const addMatchedItem = (drag, drop) => ({
  drag,
  drop,
  type: ADD_MATCHED_ITEM,
});
export const updateToastMsg = (val) => ({ type: TOAST_MESSAGE, payload: val });
export const resetMatchedItem = () => ({ type: RESET_MATCHED_ITEMS });
export const setPartiallyCorrect = (correct) => ({
  correct,
  type: SET_PARTIALLY_CORRECT,
});

const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const itemsMatched = (drag, drop, value) => ({
  drag,
  drop,
  value,
  type: SET_ITEMS_MATCHED,
});

export const updateItemsMatched = (items) => ({
  items,
  type: UPDATE_ITEMS_MATCHED,
});

export const droppableChangeState = (value, blnState) => {
  return {
    type: DROPPABLE_CHNAGE_STATE,
    value,
    blnState,
  };
};

export const droppableChangeFalse = (resetValue) => {
  return {
    type: DROPPABLE_CHANGE_FALSE,
    resetValue,
  };
};

export const setStatic = (staticState) => ({
  type: SET_STATIC,
  staticState,
});

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
      selectedDraggable: { value, target },
    } = getState();

    if (target) {
      if (dropzone.answerId == target) {
        dispatch(addMatchedItem({ ...getState().selectedDraggable }));
        dispatch(disableDraggable(value, true));
      } else {
      }
    }
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
      dispatch(setStatic(false));
      dispatch(updateAccessibleList(false));
      dispatch(updateToastMsg(""));
      dispatch(showVideoData(false));
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
  onDrop: (dropZone) => (dispatch, getState) => {
    const { selectedDraggable } = getState();
    dispatch(addMatchedItem(selectedDraggable, dropZone));

    let txt1 =
      selectedDraggable.text + " " + data.liveAriaTxt + " " + dropZone.name;
    if (isAndroid) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(txt1));
      }, 500);
    } else {
      dispatch(common.thunks.ariaLiveAssertive(txt1));
    }
    dispatch(selectDraggable(null));
  },
  finishPressed: () => (dispatch, getState) => {
    EventManager.broadcast("STOP_ALL");
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(5));
    EventManager.broadcast("COMPLETION_SCREEN");
  },

  checkButtonPressed: () => (dispatch, getState) => {
    let { matchedItems, showStatic } = getState();
    let flag = true;
    for (let item of matchedItems) {
      if (item.drag.target !== item.drop.id) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      const _matchedItems = matchedItems?.filter(
        (item) => item.drag.target == item.drop.accept
      );
      if (_matchedItems.length > 0) {
        dispatch(updateToastMsg("partially_incorrect"));
      } else {
        dispatch(updateToastMsg("incorrect"));
      }
      dispatch(updateItemsMatched(_matchedItems));
      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 500);
    } else {
      if (showStatic) {
        dispatch(common.toggleToastMessage(false));
        EventManager.broadcast("STOP_ALL");
        dispatch(common.togglePopup(5));
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(updateToastMsg("correct"));
        dispatch(setStatic(true));
      }
    }
  },
};
