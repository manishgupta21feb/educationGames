import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import { isMacOs, isAndroid } from "react-device-detect";

import data from "../data";
export const common = { ...actions };
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  updateResetBtnState,
} = actions;

export const IS_ACCESSIBLE = "IS_ACCESSIBLE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";

export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";

export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const SET_DRAGGABLE_VALUE = "SET_DRAGGABLE_VALUE";
export const SET_ITEMS_MATCHED = "SET_ITEMS_MATCHED";
export const UPDATE_ITEMS_MATCHED = "UPDATE_ITEMS_MATCHED";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const DROPPABLE_CHNAGE_STATE = "DROPPABLE_CHNAGE_STATE";
export const RESET_DROPPABLE_STATE = "RESET_DROPPABLE_STATE";
export const SET_CURRENT_SCREEN = "SET_CURRENT_SCREEN";
export const HIDE_CHECK_BUTTON = "HIDE_CHECK_BUTTON";
export const UPDATE_LAST_SCREEN = "UPDATE_LAST_SCREEN";
export const UPDATE_ALLIGATOR_ARRAY = "UPDATE_ALLIGATOR_ARRAY";
export const SET_ZINDEX_STATUS = "SET_ZINDEX_STATUS";
export const IS_PARTIALLY_CORRECT = "IS_PARTIALLY_CORRECT";

export const updateToastMsg = (val) => {
  return {
    type: TOAST_MESSAGE,
    val,
  };
};

export const resetDroppableState = (resetValue) => {
  return {
    type: RESET_DROPPABLE_STATE,
    resetValue,
  };
};

export const updateAccessibleList = (val) => {
  return {
    val,
    type: ACCESSIBLE_LIST_VISIBLE,
  };
};

export const setActivityCompleted = (completed) => {
  return {
    completed,
    type: SET_ACTIVITY_COMPLETED,
  };
};

export const wrongAnswer = (answer) => {
  return {
    type: WRONG_ANSWER,
    answer,
  };
};

export const submitButtonPressed = (pressed) => {
  return {
    pressed,
    type: SUBMIT_BUTTON_PRESSED,
  };
};

export const setDraggableValue = (dragValue) => {
  return {
    dragValue,
    type: SET_DRAGGABLE_VALUE,
  };
};

export const itemsMatched = (drag, drop) => {
  return {
    drag,
    drop,
    type: SET_ITEMS_MATCHED,
  };
};

export const updateItemsMatched = (items) => {
  return {
    items,
    type: UPDATE_ITEMS_MATCHED,
  };
};

export const droppableChangeState = (value, blnState) => {
  return {
    type: DROPPABLE_CHNAGE_STATE,
    value,
    blnState,
  };
};

export const setCurrentScreen = (val) => {
  return {
    type: SET_CURRENT_SCREEN,
    val,
  };
};

export const updateLastScreen = (val) => {
  return {
    type: UPDATE_LAST_SCREEN,
    val,
  };
};
export const hideCheckButton = (val) => {
  return {
    type: HIDE_CHECK_BUTTON,
    val,
  };
};

export const updateAlligatorsArray = (val) => {
  return {
    type: UPDATE_ALLIGATOR_ARRAY,
    val,
  };
};

export const setzindexStatus = (status) => {
  return {
    type: SET_ZINDEX_STATUS,
    status,
  };
};

export const isPartiallyCorrect = (status) => {
  return {
    type: IS_PARTIALLY_CORRECT,
    status,
  };
};

export const thunks = {
  onDrop: (dropzone) => (dispatch, getState) => {
    let { setDraggable, setDroppable } = getState();
    const liveDroppedText =
      setDraggable.arialabel + " " + data.droppedTxt + " " + dropzone.arialabel;
    dispatch(thunks.ariaLiveUpdater(liveDroppedText));
    const _droppable = [...setDroppable];
    const index = _droppable.findIndex((index) => index.id == dropzone.id);
    _droppable[index] = { ...setDroppable[index], hidden: true };
    dispatch(droppableChangeState(_droppable));
    dispatch(itemsMatched(setDraggable, dropzone));
    dispatch(setDraggableValue({}));
    setTimeout(() => {
      dispatch(ariaLiveText(""));
    }, 5000);
  },

  onCheck: () => (dispatch, getState) => {
    let {
      matchedItems,
      setDroppable,
      sim145CurrentScreen,
      lastScreenPart,
    } = getState();
    let isFalseDroped = true;
    for (let item of matchedItems) {
      if (item.drag.answerId !== item.drop.answerId) {
        isFalseDroped = false;
        break;
      }
    }

    if (!isFalseDroped) {
      const _matchedItems = matchedItems.filter(
        (item) => item.drag.answerId == item.drop.answerId
      );

      if (sim145CurrentScreen === "fifth") {
        if (lastScreenPart === "first" && _matchedItems.length > 0) {
          dispatch(isPartiallyCorrect(true));
        } else if (lastScreenPart === "second" && _matchedItems.length > 2) {
          dispatch(isPartiallyCorrect(true));
        } else dispatch(isPartiallyCorrect(false));
      } else {
        if (_matchedItems.length > 0) {
          dispatch(isPartiallyCorrect(true));
        } else dispatch(isPartiallyCorrect(false));
      }

      const _unmatchedItems = matchedItems.filter(
        (item) => item.drag.answerId !== item.drop.answerId
      );

      let _state = [...setDroppable];
      let result = _state.map((element, idx) => {
        for (let i of _unmatchedItems) {
          if (element.id === i.drop.id) {
            element.hidden = false;
          }
        }
        return element;
      });
      dispatch(droppableChangeState(result));
      dispatch(updateItemsMatched(_matchedItems));
      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 500);
      dispatch(toggleToastMessage(true));
      dispatch(submitButtonPressed(true));
      dispatch(wrongAnswer(true));
    } else {
      setTimeout(() => {
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }, 500);
      dispatch(wrongAnswer(false));
      dispatch(hideCheckButton(true));
      dispatch(toggleToastMessage(true));
      dispatch(submitButtonPressed(true));
    }
  },

  nextOnClick: () => {
    return (dispatch, getState) => {
      const { sim145CurrentScreen } = getState();
      if (sim145CurrentScreen === "second") {
        dispatch(droppableChangeState(data.screen3Dropzones));
        dispatch(setCurrentScreen("third"));
      } else if (sim145CurrentScreen === "third") {
        dispatch(droppableChangeState(data.screen5FirstPartDropzones));
        dispatch(setCurrentScreen("forth"));
      } else {
        dispatch(droppableChangeState([]));
        dispatch(updateLastScreen("first"));
        dispatch(setCurrentScreen("sixth"));
      }
      dispatch(setDraggableValue(""));
      dispatch(wrongAnswer(false));
      dispatch(updateItemsMatched([]));
      dispatch(hideCheckButton(false));
      dispatch(submitButtonPressed(false));
      dispatch(isPartiallyCorrect(false));
    };
  },

  fifthScreenOnContinue: () => {
    return (dispatch, getState) => {
      dispatch(updateLastScreen("second"));
      dispatch(droppableChangeState(data.screen5SecondPartDropzones));
      dispatch(wrongAnswer(false));
      dispatch(hideCheckButton(false));
      dispatch(submitButtonPressed(false));
    };
  },

  showAlligatorInfo: (val) => {
    return (dispatch, getState) => {
      const { alligatorsArray } = getState();
      let selectedBtnTxt = data[val].selectedBtnTxt;
      dispatch(thunks.ariaLiveUpdater(selectedBtnTxt));
      let updatedArr = [...alligatorsArray];
      updatedArr.push(val);
      dispatch(updateAlligatorsArray(updatedArr));
      setTimeout(() => {
        dispatch(ariaLiveText(""));
      }, 3000);
    };
  },

  ariaLiveUpdater: (data) => {
    return (dispatch) => {
      if (isMacOs || isAndroid) {
        setTimeout(() => {
          dispatch(ariaLiveText(data));
        }, 300);
      } else dispatch(ariaLiveText(data));
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(updateAlligatorsArray([]));
      dispatch(isPartiallyCorrect(false));
      dispatch(updateResetBtnState(true));
      dispatch(setCurrentScreen("first"));
      dispatch(setActivityCompleted(false));
      dispatch(togglePopup(1));
      dispatch(updateLastScreen("first"));
      dispatch(ariaLiveText(data.resetLiveText));

      dispatch(setDraggableValue(""));
      dispatch(updateItemsMatched([]));
      dispatch(resetDroppableState());

      dispatch(hideCheckButton(false));
      dispatch(submitButtonPressed(false));
      dispatch(wrongAnswer(false));

      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }

      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },
};
