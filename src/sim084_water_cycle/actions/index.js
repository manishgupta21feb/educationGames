import * as actions from "../../app/actions";
import data from "../data";
import { isAndroid } from "react-device-detect";

export const DEMO_ACTION = "DEMO_ACTION";
export const SET_ITEMS_MATCHED = "SET_ITEMS_MATCHED";
export const UPDATE_ITEMS_MATCHED = "UPDATE_ITEMS_MATCHED";

export const SET_DRAGGABLE_VALUE = "SET_DRAGGABLE_VALUE";
export const SET_DROPPABLE_VALUE = "SET_DROPPABLE_VALUE";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const HOLD_SINGLE_DRAGGABLE = "HOLD_SINGLE_DRAGGABLE";
export const SUBMIT_BUTTON_STATE = "SUBMIT_BUTTON_STATE";
export const NEXT_BUTTON_STATE = "NEXT_BUTTON_STATE";
export const UPDATE_SINGLE_DRAGGABLE = "UPDATE_SINGLE_DRAGGABLE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const DROPPABLE_CHNAGE_STATE = "DROPPABLE_CHNAGE_STATE";
export const DROPPABLE_CHANGE_FALSE = "DROPPABLE_CHANGE_FALSE";
export const SHOW_ALERT = "SHOW_ALERT";
export const UPDATE_DROP_ZONE = "UPDATE_DROP_ZONE";

export const common = { ...actions };

export const droppableChangeState = (value, blnState, question) => {
  return {
    type: DROPPABLE_CHNAGE_STATE,
    value,
    blnState,
  };
};

export const setShowAlert = (val) => {
  return {
    type: SHOW_ALERT,
    val,
  };
};
export const droppableChangeFalse = (resetValue) => {
  return {
    type: DROPPABLE_CHANGE_FALSE,
    resetValue,
  };
};

export const setSubmitButtonState = (val) => ({
  type: SUBMIT_BUTTON_STATE,
  val,
});
export const updateSingleDraggable = (item) => ({
  type: UPDATE_SINGLE_DRAGGABLE,
  item,
});

export const setNextButtonState = (val) => ({
  type: NEXT_BUTTON_STATE,
  val,
});

export const setHoldeSingleDrag = (drag, drop) => ({
  type: HOLD_SINGLE_DRAGGABLE,
  drag,
  drop,
});

export const itemsMatched = (drag, drop) => ({
  drag,
  drop,
  type: SET_ITEMS_MATCHED,
});

export const updateItemsMatched = (items) => ({
  items,
  type: UPDATE_ITEMS_MATCHED,
});

export const updateDropZone = () => ({
  type: UPDATE_DROP_ZONE,
});
export const updateToastMsg = (val) => {
  return {
    type: TOAST_MESSAGE,
    val,
  };
};

export const setDraggableValue = (dragValue) => ({
  dragValue,
  type: SET_DRAGGABLE_VALUE,
});

export const setDroppableValue = (dropValue) => ({
  dropValue,
  type: SET_DROPPABLE_VALUE,
});

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const thunks = {
  onDrop: (dropzone) => (dispatch, getState) => {
    let { setDraggable: dragItem } = getState();

    dispatch(setDroppableValue(dropzone));
    dispatch(setHoldeSingleDrag(dragItem, dropzone));
    dispatch(setSubmitButtonState(false));
    dispatch(setShowAlert(true));
    dispatch(common.updateResetBtnState(false));
    let txt1 =
      dragItem.arialabel + " " + data.liveAriaTxt + " " + dropzone.label;
    if (isAndroid) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(txt1));
      }, 500);
    } else {
      dispatch(common.thunks.ariaLiveAssertive(txt1));
    }

    dispatch(setDraggableValue(null));
  },

  onSubmitButton: () => (dispatch, getState) => {
    let { setDraggable, droppableValue, holdSingleDrag } = getState();

    let flag = true;

    if (
      holdSingleDrag &&
      holdSingleDrag[holdSingleDrag.length - 1].drag.answerId !==
        holdSingleDrag[holdSingleDrag.length - 1].drop.id
    ) {
      flag = false;
    }
    if (!flag) {
      const _matchedItems = holdSingleDrag.filter(
        (item) => item.drag.answerId == item.drop.id
      );

      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 500);
      dispatch(common.toggleToastMessage(true));
      dispatch(updateToastMsg("incorrect"));
      dispatch(updateSingleDraggable([]));
    } else {
      setTimeout(() => {
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }, 500);
      dispatch(setNextButtonState(true));

      dispatch(itemsMatched(holdSingleDrag[0].drag, droppableValue));
      dispatch(common.toggleToastMessage(true));
      dispatch(updateToastMsg("success"));
      const { matchedItems } = getState();
      TincanManager.data.percentage = parseInt(
        (matchedItems.length / data.draggable.length) * 100
      );
      TincanManager.saveTincanData();
    }

    dispatch(setSubmitButtonState(true));
    dispatch(setDraggableValue(""));
  },
  onNextButton: (data) => (dispatch, getState) => {
    let { matchedItems } = getState();
    if (matchedItems.length < 5) {
      dispatch(updateSingleDraggable([]));
      dispatch(setNextButtonState(false));
      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
    } else {
      dispatch(common.togglePopup(3));
      EventManager.broadcast("STOP_ALL");
      EventManager.broadcast("COMPLETION_SCREEN");
    }
  },
  resetActivity: (value) => (dispatch, getState) => {
    let { currentPopup } = getState();
    dispatch(updateSingleDraggable([]));
    dispatch(setNextButtonState(false));
    dispatch(setSubmitButtonState(true));
    dispatch(updateItemsMatched([]));
    dispatch(droppableChangeFalse(...data.droppable));
    dispatch(updateDropZone());
    dispatch(common.setResetFocusState(false));
    dispatch(common.updateResetBtnState(true));
    if (currentPopup.indexOf(3) >= 0) {
      dispatch(common.togglePopup(3));
    }
    if (currentPopup.indexOf(4) >= 0) {
      dispatch(common.togglePopup(4));
    }
    dispatch(common.togglePopup(1));
  },
};
