import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
export const common = { ...actions };

const { ariaLiveText, toggleToastMessage, togglePopup, updateResetBtnState } =
  actions;

export const ELEMENT_DATA = "ELEMENT_DATA";
export const DROP_ELEMENT = "DROP_ELEMENT";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const UPDATE_SHOW_NEXT = "UPDATE_SHOW_NEXT";
export const RESET_DROPPED_AT = "RESET_DROPPED_AT";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const UPDATE_DROPPED_AT = "UPDATE_DROPPED_AT";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const SET_DRAGGABLE_ITEM = "SET_DRAGGABLE_ITEM";
export const RESET_DRAGGABLE_ITEM = "RESET_DRAGGABLE_ITEM";

export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const SET_INCORRECT_TOAST_MESSAGE = "SET_INCORRECT_TOAST_MESSAGE";
export const SET_ALREADY_DROPPED_INCORRECT_TOAST_MESSAGE =
  "SET_ALREADY_DROPPED_INCORRECT_TOAST_MESSAGE";
export const COMPLETE_ATTEMPT = "COMPLETE_ATTEMPT";

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

export const updateDroppedAt = (name, key) => ({
  name,
  key,
  type: UPDATE_DROPPED_AT,
});

export const setDraggableItem = (item) => ({
  item,
  type: SET_DRAGGABLE_ITEM,
});

export const resetDraggableItem = () => ({
  type: RESET_DRAGGABLE_ITEM,
});

export const resetDroppedAt = () => ({ type: RESET_DROPPED_AT });

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

const totalMatched = (obj) => {
  let sum = 0;
  for (let item in obj) {
    sum += obj[item].length;
  }
  return sum;
};

const totalExpected = (obj) => {
  let sum = 0;
  for (let item of obj) {
    sum += item.accept.split(",").length;
  }
  return sum;
};

const setIncorrectToastMsg = (message) => {
  return { message, type: SET_INCORRECT_TOAST_MESSAGE };
};

const setAlreadyDropedIncorrectToastMsg = (message) => {
  return { message, type: SET_ALREADY_DROPPED_INCORRECT_TOAST_MESSAGE };
};

export const thunks = {
  fetchElements: () => {
    return (dispatch, getState) => {
      const { selectedStage } = getState();
      dispatch(
        updateElementData(
          helper.shuffleArray(data.elements.map((e) => ({ ...e })))
        )
      );
    };
  },
  resetGame: () => {
    return (dispatch, getState) => {
      dispatch(togglePopup(1));
      dispatch(
        updateElementData(
          helper.shuffleArray(data.elements.map((e) => ({ ...e })))
        )
      );
      dispatch(updateDropElement({}));
      dispatch(updateResetBtnState(true));
      dispatch(updateAccessibleList(false));
      dispatch(updateShowNext(false));
      dispatch(ariaLiveText(""));
      dispatch(resetDraggableItem());
      dispatch(resetDroppedAt());
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
    };
  },
  matchDraggedItem: (dropZone) => {
    return (dispatch, getState) => {
      dispatch(toggleToastMessage(false));
      const { draggableItem, itemDroppedAt } = getState();
      if (
        dropZone &&
        dropZone.target &&
        draggableItem &&
        draggableItem.target
      ) {
        dispatch(updateDroppedAt(draggableItem.value, dropZone.target));
        if (
          itemDroppedAt[draggableItem.value] &&
          itemDroppedAt[draggableItem.value].indexOf(dropZone.target) >= 0
        ) {
          const alreadyDroppedToastMessage = data.alreadyDroppedToastMessage
            .replace("-1-", draggableItem.value.toLowerCase())
            .replace("-2-", dropZone.target);
          dispatch(
            setAlreadyDropedIncorrectToastMsg(alreadyDroppedToastMessage)
          );
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          setTimeout(() => {
            dispatch(updateToastMsg("incorrect2"));
            dispatch(toggleToastMessage(true));
          }, 50);
        } else {
          if (draggableItem.target.includes(dropZone.target)) {
            dispatch(
              thunks.addMatchedItem(dropZone.target, draggableItem.value)
            );
            dispatch(updateToastMsg("correct"));
            dispatch(toggleToastMessage(true));
            EventManager.broadcast("POSITIVE_FEEDBACK");
          } else {
            setTimeout(() => {
              dispatch(updateToastMsg("incorrect"));
              dispatch(toggleToastMessage(true));
            }, 50);
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }
        }
        setTimeout(() => {
          dispatch(updateAccessibleList(false));
          dispatch(resetDraggableItem());
        }, 50);
      }
    };
  },
  addMatchedItem: (key, item) => {
    return (dispatch, getState) => {
      const { matchedItems, resetBtnState } = getState();
      const prevCount = totalMatched(matchedItems);
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      dispatch(addMatchedItem(key, item));
      const { matchedItems: updatedMatchedItems } = getState();
      const currentCount = totalMatched(updatedMatchedItems);
      const expected = totalExpected(data.elements);
      if (prevCount !== currentCount && currentCount == expected) {
        // dispatch(setActivityCompleted(true));
        setTimeout(() => {
          dispatch(toggleToastMessage(false));
          dispatch(actions.togglePopup(4));
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }, 50);
      }
    };
  },
  updateDroppedAt: (name, key) => {
    return (dispatch, getState) => {
      dispatch(updateDroppedAt(name, key));
      const { resetBtnState } = getState();
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },
};
