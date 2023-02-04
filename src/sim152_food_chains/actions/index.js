import * as actions from "../../app/actions";

export const DEMO_ACTION = "DEMO_ACTION";

export const common = { ...actions };
import data from "../data/data.en";

export const BUTTON_ID = "BUTTON_ID";
export const DROPZONE_ONE = "DROPZONE_ONE";
export const DROPZONE_TWO = "DROPZONE_TWO";
export const SCREEN_CHANGE = "SCREEN_CHANGE";
export const DROPPABLE_IDS = "DROPPABLE_IDS";
export const DROPZONE_FOUR = "DROPZONE_FOUR";
export const DROPZONE_FIVE = "DROPZONE_FIVE";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const DROPZONE_THREE = "DROPZONE_THREE";
export const CLEAR_BUTTON_ID = "CLEAR_BUTTON_ID";
export const VISITED_BUTTONS = "VISITED_BUTTONS";
export const RESET_DROPPABLES = "RESET_DROPPABLES";
export const UPDATE_DRAGGABLES = "UPDATE_DRAGGABLES";
export const UPDATE_DROPPABLES = "UPDATE_DROPPABLES";
export const SET_DRAGGABLE_ITEM = "SET_DRAGGABLE_ITEM";
export const STORE_DROPPED_DATA = "STORE_DROPPED_DATA";
export const RESET_DROPPED_DATA = "RESET_DROPPED_DATA";
export const CLEAR_DROPPABLE_IDS = "CLEAR_DROPPABLE_IDS";
export const RESET_DRAGGABLE_ITEM = "RESET_DRAGGABLE_ITEM";
export const CLEAR_VISITED_BUTTONS = "CLEAR_VISITED_BUTTONS";
export const RESET_DRAGTYPE_FROM_DROPPABLES = "RESET_DRAGTYPE_FROM_DROPPABLES";
export const CLEAR_DRAGGABLES_FROM_DROP_REGION =
  "CLEAR_DRAGGABLES_FROM_DROP_REGION";

export const CLEAR_DROPZONES = "CLEAR_DROPZONES";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const STORE_DRAGGABLE_IDS = "STORE_DRAGGABLE_IDS";
export const CLEAR_DRAGGABLE_IDS = "CLEAR_DRAGGABLE_IDS";

export const addVisitedButtons = (value) => {
  return {
    value,
    type: VISITED_BUTTONS,
  };
};

export const clearVisitedButtons = (value) => {
  return {
    value,
    type: CLEAR_VISITED_BUTTONS,
  };
};

export const changeScreen = (value) => {
  return {
    value,
    type: SCREEN_CHANGE,
  };
};

export const setButtonID = (value) => {
  return {
    value,
    type: BUTTON_ID,
  };
};

export const clearButtonId = () => {
  return {
    type: CLEAR_BUTTON_ID,
  };
};

export const setDraggableItem = (item) => ({
  item,
  type: SET_DRAGGABLE_ITEM,
});

export const storeDroppedData = (key, item, drop) => {
  return {
    item,
    key,
    drop,
    type: STORE_DROPPED_DATA,
  };
};

export const resetDropped = () => {
  return {
    type: RESET_DROPPED_DATA,
  };
};

export const addDroppableId = (id) => {
  return {
    id,
    type: DROPPABLE_IDS,
  };
};

export const removeDroppableId = () => {
  return {
    type: CLEAR_DROPPABLE_IDS,
  };
};

export const addDraggableId = (id) => {
  return {
    id,
    type: STORE_DRAGGABLE_IDS,
  };
};

export const removeDraggableId = () => {
  return {
    type: CLEAR_DRAGGABLE_IDS,
  };
};

export const dropAtOne = (value) => {
  return {
    value,
    type: DROPZONE_ONE,
  };
};

export const dropAtTwo = (value) => {
  return {
    value,
    type: DROPZONE_TWO,
  };
};
export const dropAtThree = (value) => {
  return {
    value,
    type: DROPZONE_THREE,
  };
};
export const dropAtFour = (value) => {
  return {
    value,
    type: DROPZONE_FOUR,
  };
};
export const dropAtFive = (value) => {
  return {
    value,
    type: DROPZONE_FIVE,
  };
};

export const resetDraggableItem = () => ({
  type: RESET_DRAGGABLE_ITEM,
});

export const setDragType = (item) => {
  return {
    item,
    type: DRAG_TYPE,
  };
};

export const resetDroppables = () => {
  return {
    type: RESET_DROPPABLES,
  };
};

export const updateDroppables = (items) => ({
  items,
  type: UPDATE_DROPPABLES,
});

export const resetDragTypeFromDroppables = () => ({
  type: RESET_DRAGTYPE_FROM_DROPPABLES,
});

export const resetDraggables = () => {
  return {
    type: RESET_DROPPABLES,
  };
};

export const updateDraggables = (items) => ({
  items,
  type: UPDATE_DRAGGABLES,
});

export const clearDraggables = () => ({
  type: CLEAR_DRAGGABLES_FROM_DROP_REGION,
});

export const correctAnswer = (value) => {
  return {
    value,
    type: CORRECT_ANSWER,
  };
};

export const clearDropzones = () => {
  return {
    type: CLEAR_DROPZONES,
  };
};

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const thunks = {
  completeActivity: () => {
    return (dispatch, getState) => {
      const { visitedButtons } = getState();

      if (visitedButtons.length <= 13) {
        TincanManager.data.percentage = parseInt(
          (visitedButtons.length / 13) * 50
        );
        TincanManager.saveTincanData();
      }
    };
  },

  dropped: (a) => {
    return (dispatch, getState) => {
      const { draggableItem, droppables, draggables } = getState();

      let b = draggableItem.id;
      let c = draggableItem.label;

      if (a.id == "dropzone1") {
        dispatch(dropAtOne({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone2") {
        dispatch(dropAtTwo({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone3") {
        dispatch(dropAtThree({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone4") {
        dispatch(dropAtFour({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone5") {
        dispatch(dropAtFive({ drop: a.id, drag: b, label: c }));
      }

      dispatch(addDraggableId(b));

      const _draggables = draggables.map((draggable) => {
        if (draggable.id == b) {
          const _draggable = { ...draggable };
          _draggable.totalDrops += 1;
          return _draggable;
        }
        return draggable;
      });

      const _droppables = droppables.map((droppable) => {
        if (droppable.id == a.id) {
          const _droppable = { ...droppable };
          _droppable.dragType = b;
          _droppable.hidden = true;
          return _droppable;
        }
        return droppable;
      });
      dispatch(updateDraggables(_draggables));
      dispatch(updateDroppables(_droppables));

      dispatch(updateAccessibleList(false));

      const livetext = data.onDropText
        .replace("-1-", b)
        .replace("-2-", a.altText);
      // dispatch(ariaLiveText(livetext));

      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(livetext));
      }, 600);
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      const {
        droppedItem,
        dropzoneOne,
        dropzoneTwo,
        dropzoneThree,
        dropzoneFour,
        dropzoneFive,
      } = getState();

      let zoneOne = false;
      let zoneTwo = false;
      let zoneThree = false;
      let zoneFour = false;
      let zoneFive = false;

      if (dropzoneOne && dropzoneOne[0].drag == "sun") {
        zoneOne = true;
      }
      if (dropzoneTwo && dropzoneTwo[0].drag == "sunflower") {
        zoneTwo = true;
      }
      if (dropzoneThree && dropzoneThree[0].drag == "mouse") {
        zoneThree = true;
      }
      if (dropzoneFour && dropzoneFour[0].drag == "snake") {
        zoneFour = true;
      }
      if (dropzoneFive && dropzoneFive[0].drag == "hawk") {
        zoneFive = true;
      }

      if (
        zoneOne == true &&
        zoneTwo == true &&
        zoneThree == true &&
        zoneFour == true &&
        zoneFive == true
      ) {
        dispatch(correctAnswer(true));
        dispatch(common.toggleToastMessage(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      } else {
        dispatch(correctAnswer(false));
        dispatch(clearDropzones());
        dispatch(resetDroppables());
        dispatch(removeDroppableId());
        dispatch(common.toggleToastMessage(true));
        dispatch(clearDraggables());
        dispatch(removeDraggableId());
        EventManager.broadcast("NEGATIVE_FEEDBACK");
        TincanManager.data.percentage = 50;
        TincanManager.saveTincanData();
      }
    };
  },

  continueClick: () => {
    return (dispatch, getState) => {
      const { visitedButtons } = getState();
      if (visitedButtons.length == 13) {
        dispatch(actions.togglePopup(5));
        // dispatch(common.setResetFocusState(true));
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },

  finshButton: () => {
    return (dispatch, getState) => {
      dispatch(common.setResetFocusState(true));
      dispatch(actions.togglePopup(6));
      dispatch(actions.toggleToastMessage(false));
      EventManager.broadcast("COMPLETION_SCREEN");
    };
  },

  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(clearVisitedButtons());
      dispatch(changeScreen(false));
      dispatch(clearButtonId());
      dispatch(clearDropzones());
      dispatch(removeDroppableId());
      dispatch(resetDroppables());
      dispatch(resetDraggableItem());
      dispatch(clearDraggables());
      dispatch(common.toggleToastMessage(false));
      dispatch(removeDraggableId());
      dispatch(resetDropped());
      dispatch(common.setResetFocusState(true));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(correctAnswer(false));
      dispatch(setDraggableItem(null));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
      const { currentPopup } = getState();
      if (currentPopup.indexOf(6) >= 0) {
        dispatch(common.togglePopup(6));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(common.togglePopup(7));
      }
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(common.togglePopup(1));
      }, 100);
    };
  },
};
