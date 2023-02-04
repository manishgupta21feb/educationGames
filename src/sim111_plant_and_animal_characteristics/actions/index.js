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
export const SET_MONEKY_DRAGGABLES = "SET_MONEKY_DRAGGABLES";
export const ADD_DROPPED_ITEM = "ADD_DROPPED_ITEM";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const ADD_DRAGGABLE_ITEM = "ADD_DRAGGABLE_ITEM";
export const SET_ACTIVE_DROPZONE = "SET_ACTIVE_DROPZONE";
export const RESET_DROPPED_ITEMS = "RESET_DROPPED_ITEMS";
export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";
export const UPDATE_MONKEYS_DROPZONES = "UPDATE_MONKEYS_DROPZONES";
export const RESET_MONKEYS_DROPZONES = "RESET_MONKEYS_DROPZONES";
export const RESET_TREES_DROPZONES = "RESET_TREES_DROPZONES";
export const UPDATE_TREES_DROPZONES = "UPDATE_TREES_DROPZONES";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const SET_FIRST_ACTIVITY_COMPLETED = "SET_FIRST_ACTIVITY_COMPLETED";
export const UPDATE_SECOND_SCREEN_ENABILITY = "UPDATE_SECOND_SCREEN_ENABILITY";
export const SET_CORRECT_DROP_INFO = "SET_CORRECT_DROP_INFO";
export const SET_ZINDEX_STATUS = "SET_ZINDEX_STATUS";
export const UPDATE_ARIA_LEVEL = "UPDATE_ARIA_LEVEL";

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

export const setMonekeydraggables = (monekeydraggables) => ({
  monekeydraggables,
  type: SET_MONEKY_DRAGGABLES,
});

export const addDroppedItem = (droppedId) => ({
  droppedId,
  type: ADD_DROPPED_ITEM,
});

export const resetDroppedItems = () => ({ type: RESET_DROPPED_ITEMS });

export const setActivityCompleted = (completed) => ({
  completed,
  type: SET_ACTIVITY_COMPLETED,
});

export const setFirstActivityCompleted = (val) => ({
  val,
  type: SET_FIRST_ACTIVITY_COMPLETED,
});

export const updateMonekysDropzones = (items) => ({
  items,
  type: UPDATE_MONKEYS_DROPZONES,
});

export const resetMonekysDropzones = () => ({
  type: RESET_MONKEYS_DROPZONES,
});

export const updateTreesDropzones = (items) => ({
  items,
  type: UPDATE_TREES_DROPZONES,
});

export const resetTreesDropzones = () => ({
  type: RESET_TREES_DROPZONES,
});

export const addMatchedItem = (item) => ({
  type: ADD_MATCHED_ITEM,
  item,
});

export const resetMatchedItem = () => ({
  type: RESET_MATCHED_ITEMS,
});

export const updateSecondScreenEnabilty = (val) => ({
  type: UPDATE_SECOND_SCREEN_ENABILITY,
  val,
});

export const setCorrectDropInformation = (text) => ({
  type: SET_CORRECT_DROP_INFO,
  text,
});

export const setzindexStatus = (status) => ({
  type: SET_ZINDEX_STATUS,
  status,
});

export const updateLeftImgAria = (val) => ({
  type: UPDATE_ARIA_LEVEL,
  val,
});

export const thunks = {
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(updateLeftImgAria(""));
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(resetDroppedItems());
      dispatch(selectDraggable(null));
      dispatch(updateResetBtnState(true));
      dispatch(setActivityCompleted(false));
      dispatch(setFirstActivityCompleted(false));
      dispatch(resetMonekysDropzones());
      dispatch(resetTreesDropzones());
      dispatch(resetMatchedItem());
      dispatch(updateSecondScreenEnabilty(false));
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },

  onContinueButton: () => {
    return (dispatch, getState) => {
      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.togglePopup(3));
      EventManager.broadcast("COMPLETION_SCREEN");
    };
  },

  onFinishButton: () => {
    return (dispatch, getState) => {
      TincanManager.data.completed = true;
      TincanManager.data.percentage = 100;
      TincanManager.saveTincanData();
      dispatch(common.toggleToastMessage(false));
      dispatch(common.togglePopup(4));
      EventManager.broadcast("COMPLETION_SCREEN");
    };
  },

  onContinue: () => {
    return (dispatch, getState) => {
      dispatch(updateSecondScreenEnabilty(true));
      dispatch(resetMatchedItem());
      dispatch(resetDroppedItems());
      dispatch(togglePopup(3));
      dispatch(setFirstActivityCompleted(false));
      dispatch(updateLeftImgAria(data.menkeyDroppableImgAria));
    };
  },

  dialogActivity: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(togglePopup(6));
    };
  },

  checkDrop: (item) => (dispatch, getState) => {
    const {
      selectedDraggable,
      monkeyDropzones,
      isSecondScreenEnable,
      treeDropzones,
    } = getState();
    const { target } = item;
    const { source } = selectedDraggable;
    if (source && source.includes(target)) {
      dispatch(addDroppedItem(item.id));
      const { droppedItems } = getState();
      dispatch(addMatchedItem({ ...selectedDraggable }));

      dispatch(setCorrectDropInformation(item.toastMsg));
      dispatch(togglePopup(6));
      EventManager.broadcast("POSITIVE_FEEDBACK");

      if (!isSecondScreenEnable) {
        const _dropzones = [...treeDropzones];
        const index = _dropzones.findIndex((d) => d.id == item.id);
        _dropzones[index] = { ...treeDropzones[index], hidden: true };
        dispatch(updateTreesDropzones(_dropzones));
        if (droppedItems.length == 5) {
          dispatch(updateLeftImgAria(""));
          setTimeout(() => {
            dispatch(setFirstActivityCompleted(true));
          }, 800);
        } else {
          const _matchedItems = getState().matchedItems;
          const _treedraggables = getState().treedraggables;
          let droppedArr = [];
          let dropableArr = [];

          for (var j = 0; j < _matchedItems.length; j++) {
            droppedArr.push(_matchedItems[j].dynamicAriaTxt2);
          }

          for (var j = 0; j < _treedraggables.length; j++) {
            let flag = false;
            for (let i = 0; i < _matchedItems.length; i++) {
              if (_treedraggables[j].id === _matchedItems[i].id) {
                flag = true;
              }
            }
            if (flag === false) {
              dropableArr.push(_treedraggables[j].dynamicAriaTxt1);
            }
          }

          let uniqueDropableArr = [...new Set(dropableArr)];
          let altTxt = "";
          let text1 = "";
          let text2 = uniqueDropableArr[0];
          let text3 = droppedArr[0];
          let text4 = "";

          if (
            droppedArr.length === 1 &&
            (droppedArr[0] === data.treeDragable[1].dynamicAriaTxt2 ||
              droppedArr[0] === data.treeDragable[3].dynamicAriaTxt2)
          ) {
            text4 = data.helpingVerb.is;
          } else {
            text4 = data.helpingVerb.are;
          }

          if (uniqueDropableArr.length === 1) {
            text1 = data.treeDynamicWords.area;
          } else {
            text1 = data.treeDynamicWords.areas;
          }

          for (let i = 1; i < droppedArr.length; i++) {
            if (i === droppedArr.length - 1) {
              text3 = text3 + " " + data.helpingVerb.and + " " + droppedArr[i];
            } else {
              text3 = text3 + " , " + droppedArr[i];
            }
          }

          for (let i = 1; i < uniqueDropableArr.length; i++) {
            if (i === uniqueDropableArr.length - 1) {
              text2 =
                text2 + " " + data.helpingVerb.and + " " + uniqueDropableArr[i];
            } else {
              text2 = text2 + " , " + uniqueDropableArr[i];
            }
          }

          altTxt = data.treeDynamicAria
            .replace("-1-", text1)
            .replace("-2-", text2)
            .replace("-3-", text3)
            .replace("-4-", text4);
          dispatch(updateLeftImgAria(altTxt));
        }
      } else {
        const _dropzones = [...monkeyDropzones];
        const index = _dropzones.findIndex((d) => d.id == item.id);
        _dropzones[index] = { ...monkeyDropzones[index], hidden: true };
        dispatch(updateMonekysDropzones(_dropzones));
        if (droppedItems.length == 9) {
          dispatch(updateLeftImgAria(""));
          setTimeout(() => {
            dispatch(setActivityCompleted(true));
          }, 800);
        } else {
          const _matchedItems = getState().matchedItems;
          const _monekeydraggables = getState().monekeydraggables;
          let droppedArr = [];
          let dropableArr = [];

          for (var j = 0; j < _matchedItems.length; j++) {
            droppedArr.push(_matchedItems[j].altTxtNormal);
          }

          for (var j = 0; j < _monekeydraggables.length; j++) {
            let flag = false;
            let commonAltTxt = false;
            for (let i = 0; i < _matchedItems.length; i++) {
              if (_monekeydraggables[j].id === _matchedItems[i].id) {
                flag = true;
              }
              if (
                _monekeydraggables[j].altTxtCombined ===
                _matchedItems[i].altTxtCombined
              ) {
                commonAltTxt = true;
              }
            }
            if (flag === false) {
              if (commonAltTxt === false) {
                dropableArr.push(_monekeydraggables[j].altTxtCombined);
              } else dropableArr.push(_monekeydraggables[j].altTxtNormal);
            }
          }

          let uniqueDropableArr = [...new Set(dropableArr)];
          let altTxt = "";
          let text1 = droppedArr[0];
          let text2 = "";
          let text3 = "";
          let text4 = uniqueDropableArr[0];

          if (droppedArr.length === 1) {
            text2 = data.helpingVerb.is;
          } else {
            text2 = data.helpingVerb.are;
          }

          if (uniqueDropableArr.length === 1) {
            text3 = data.monekyDynamicAriaSecondPart.singular;
          } else {
            text3 = data.monekyDynamicAriaSecondPart.plural;
          }

          for (let i = 1; i < droppedArr.length; i++) {
            if (i === droppedArr.length - 1) {
              text1 = text1 + " " + data.helpingVerb.and + " " + droppedArr[i];
            } else {
              text1 = text1 + " , " + droppedArr[i];
            }
          }

          for (let i = 1; i < uniqueDropableArr.length; i++) {
            if (i === uniqueDropableArr.length - 1) {
              text4 =
                text4 + " " + data.helpingVerb.and + " " + uniqueDropableArr[i];
            } else {
              text4 = text4 + " , " + uniqueDropableArr[i];
            }
          }
          altTxt = data.monkeyDynamicAria
            .replace("-1-", text1)
            .replace("-2-", text2)
            .replace("-3-", text3)
            .replace("-4-", text4);
          dispatch(updateLeftImgAria(altTxt));
        }
      }
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
