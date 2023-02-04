import * as actions from "../../app/actions";
import data from "../data";
import EventManager from "../../app/events/manager";
import { isAndroid } from "react-device-detect";

export const SET_DND_SCREEN = "SET_DND_SCREEN";
export const DRAG_DATA = "DRAG_DATA";
export const CURRENT_DRAGGING_ITEM = "CURRENT_DRAGGING_ITEM";
export const UPDATE_DND_PAIR = "UPDATE_DND_PAIR";
export const ADD_DND_PAIR = "ADD_DND_PAIR";
export const RESET_DROP_ZONES = "RESET_DROP_ZONES";
export const UPDATE_DROP_ZONES = "UPDATE_DROP_ZONES";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const RESULT = "RESULT";
export const SUBMIT_COUNT = "SUBMIT_COUNT";

export const common = { ...actions };

export const setDndScreenFor = (value) => {
  return {
    type: SET_DND_SCREEN,
    value,
  };
};

export const setCurrentDraggingItem = (item) => ({
  item,
  type: CURRENT_DRAGGING_ITEM,
});

export const setUpdateDroppedItems = (items) => ({
  items,
  type: UPDATE_DND_PAIR,
});

export const setAddDroppedItem = (source, accept) => ({
  accept,
  source,
  type: ADD_DND_PAIR,
});

export const setResetDropZones = (items) => ({
  items,
  type: RESET_DROP_ZONES,
});

export const setUpdateDropZones = (items) => ({
  items,
  type: UPDATE_DROP_ZONES,
});

export const setUpdateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const setResult = (val) => ({
  val,
  type: RESULT,
});

export const setSubmitCount = (val) => ({
  val,
  type: SUBMIT_COUNT,
});

export const helper = {
  shuffle: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const thunk = {
  onLifeTitle: (evt) => {
    return (dispatch, getState) => {
      const { getDragData, getDropZones } = getState();

      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(setDndScreenFor(evt.target.id));

      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));

      if (evt.target.id == "cricket") {
        let _getDropZones = [...getDropZones];
        _getDropZones = _getDropZones.slice(0, 3);
        dispatch(setUpdateDropZones(_getDropZones));
      } else {
        dispatch(setUpdateDropZones(data.droppables.map((q) => ({ ...q }))));
      }

      helper.shuffle(getDragData[evt.target.id]);
    };
  },

  onDropElement: (accept, label) => {
    return (dispatch, getState) => {
      const { getCurrentDraggingItem: source } = getState();
      const {
        getDropZones,
        getDndScreenFor,
        getCurrentDraggingItem,
        getDroppedItems,
      } = getState();

      dispatch(setAddDroppedItem({ ...source }, accept));

      const _getDropZones = [...getDropZones];
      const index = _getDropZones.findIndex((item) => item.accept == accept);

      if (index !== -1) {
        _getDropZones[index] = { ..._getDropZones[index] };
        _getDropZones[index].hidden = true;
        _getDropZones[
          index
        ].active = `${getDndScreenFor}-${getCurrentDraggingItem.source}`;
        _getDropZones[index].droppedText = `${getCurrentDraggingItem.title}`;
      }

      dispatch(setUpdateDropZones(_getDropZones));

      if (isAndroid) {
        setTimeout(() => {
          dispatch(
            common.thunks.ariaLiveAssertive(
              `${getCurrentDraggingItem.title} ${data.liveDropText} ${label}`
            )
          );
        }, 500);
      } else {
        dispatch(
          common.thunks.ariaLiveAssertive(
            `${getCurrentDraggingItem.title} ${data.liveDropText} ${label}`
          )
        );
      }
    };
  },

  onAnswerSubmit: () => {
    return (dispatch, getState) => {
      const { getDroppedItems, getDropZones } = getState();

      let incorrectDrops = [];
      const _getDropZones = [...getDropZones];

      for (let i in getDroppedItems) {
        const item = getDroppedItems[i];

        if (item.source != item.accept) {
          incorrectDrops.push(item.accept);
        }
      }

      if (incorrectDrops.length) {
        dispatch(setResult(false));
        EventManager.broadcast("NEGATIVE_FEEDBACK");

        const _getDroppedItems = { ...getDroppedItems };

        for (let accept of Object.keys(_getDroppedItems)) {
          delete _getDroppedItems[accept];
        }

        for (let i in _getDropZones) {
          _getDropZones[i].hidden = false;
          _getDropZones[i].active = "";
        }

        dispatch(setUpdateDroppedItems(_getDroppedItems));
      } else {
        dispatch(setResult(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
        dispatch(setSubmitCount(1));
      }

      dispatch(common.toggleToastMessage(true));
    };
  },

  onNext: () => {
    return (dispatch, getState) => {
      const { getDroppedItems, getDropZones, getSubmitCount } = getState();

      const livesLength = data.lives.length;
      const _getDroppedItems = { ...getDroppedItems };
      const _getDropZones = [...getDropZones];

      for (let accept of Object.keys(_getDroppedItems)) {
        delete _getDroppedItems[accept];
      }

      if (getSubmitCount != livesLength) {
        for (let i in _getDropZones) {
          _getDropZones[i].hidden = false;
          _getDropZones[i].active = "";
        }

        dispatch(setUpdateDroppedItems(_getDroppedItems));
        dispatch(setDndScreenFor("home"));
        dispatch(setResult(false));

        dispatch(common.updateResetBtnState(false));
        dispatch(common.setResetFocusState(true));
      } else if (getSubmitCount == livesLength) {
        EventManager.broadcast("COMPLETION_SCREEN");

        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();

        dispatch(common.togglePopup(4));
        EventManager.broadcast("COMPLETION_SCREEN");
      }

      dispatch(common.toggleToastMessage(false));
    };
  },

  onReset: () => {
    return (dispatch) => {
      dispatch(common.updateResetBtnState(true));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.togglePopup(1));

      dispatch(setDndScreenFor("home"));
      dispatch(setCurrentDraggingItem(""));
      dispatch(setResult(false));
      dispatch(setResetDropZones(data.droppables.map((q) => ({ ...q }))));
      dispatch(setAddDroppedItem({}));
      dispatch(setUpdateDroppedItems({}));
      dispatch(setSubmitCount(0));

      TincanManager.data.percentage = 0;
      TincanManager.data.completed = false;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
};
