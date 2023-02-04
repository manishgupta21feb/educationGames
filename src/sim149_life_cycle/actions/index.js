import * as actions from "../../app/actions";
import { isAndroid } from "react-device-detect";
import data from "../data";

export const common = { ...actions };
const { togglePopup, ariaLiveText, toggleToastMessage } = actions;

export const SELECTED_QUESTION = "SELECTED_QUESTION";
export const DRAGGABLE_DATA = "DRAGGABLE_DATA";
export const COUNT = "COUNT";
export const SCREEN_SELECTION = "SCREEN_SELECTION";
export const CURRENT_HOTSPOT = "CURRENT_HOTSPOT";
export const BUTTON_VISITED = "BUTTON_VISITED";
export const RIGHT_OST = "RIGHT_OST";
export const SHOW_ALERT = "SHOW_ALERT";
export const SET_DRAGGABLE_VALUE = "SET_DRAGGABLE_VALUE";
export const SET_ITEMS_MATCHED = "SET_ITEMS_MATCHED";
export const UPDATE_ITEMS_MATCHED = "UPDATE_ITEMS_MATCHED";
export const UPDATE_DROP_ZONE = "UPDATE_DROP_ZONE";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const ANSWER = "ANSWER";
export const DROPPABLE_CHNAGE_STATE = "DROPPABLE_CHNAGE_STATE";
export const DROPPABLE_CHANGE_FALSE = "DROPPABLE_CHANGE_FALSE";
export const DND_COUNT = "DND_COUNT";
export const SHOW_TOAST_FIVE = "SHOW_TOAST_FIVE";
export const SELECTED_SUB_QUESTION = "SELECTED_SUB_QUESTION";
export const SET_DROPPABLES = "SET_DROPPABLES";
export const DEFAULT_DROPZONE = "DEFAULT_DROPZONE";
export const SET_DIALOG_TEXT = "SET_DIALOG_TEXT";
export const COUNT_VALUE = " COUNT_VALUE";
export const setDialogText = (txt) => {
  return {
    type: SET_DIALOG_TEXT,
    txt,
  };
};
export const setShowToastFive = (val) => {
  return {
    type: SHOW_TOAST_FIVE,
    val,
  };
};

export const setSelectedSubQuestion = (val) => {
  return {
    type: SELECTED_SUB_QUESTION,
    val,
  };
};
export const setSelectedQuestion = (question) => {
  return {
    type: SELECTED_QUESTION,
    question,
  };
};

export const setCurrentHotSpot = (id) => ({
  type: CURRENT_HOTSPOT,
  id,
});

export const setVisitedBtn = (value) => {
  return {
    type: BUTTON_VISITED,
    value,
  };
};

export const setdraggableData = (val) => {
  return {
    type: DRAGGABLE_DATA,
    val,
  };
};
export const setCount = (val) => {
  return {
    type: COUNT,
    val,
  };
};
export const setCountValue = (val) => {
  return {
    type: COUNT_VALUE,
    val,
  };
};
export const setScreen = (val) => {
  return {
    type: SCREEN_SELECTION,
    val,
  };
};
export const setRightOst = (val) => {
  return {
    type: RIGHT_OST,
    val,
  };
};

export const setShowAlert = (val) => {
  return {
    type: SHOW_ALERT,
    val,
  };
};
export const setDraggableValue = (dragValue) => ({
  dragValue,
  type: SET_DRAGGABLE_VALUE,
});

export const setItemsMatched = (drag, drop) => ({
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
export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});
export const setAnswer = (val) => ({
  val,
  type: ANSWER,
});

export const droppableChangeState = (value, blnState, question) => {
  return {
    type: DROPPABLE_CHNAGE_STATE,
    value,
    blnState,
    question,
  };
};

export const setDropZone = (question) => {
  return {
    type: SET_DROPPABLES,

    question,
  };
};
export const setDefaultDrop = (question) => {
  return {
    type: DEFAULT_DROPZONE,

    question,
  };
};
export const droppableChangeFalse = () => {
  return {
    type: DROPPABLE_CHANGE_FALSE,
  };
};

export const setDnDCount = (val) => ({
  val,
  type: DND_COUNT,
});

export const thunks = {
  setDraggable: () => {
    return (dispatch, getState) => {
      const { draggableData, count } = getState();
      const _dragData = draggableData.map((d) => ({ ...d }));
      _dragData.sort(() => Math.random() - 0.5);
      dispatch(setdraggableData(_dragData));
    };
  },
  setQuestion: () => {
    return (dispatch, getState) => {
      const { count } = getState();
      dispatch(setSelectedQuestion(data.butterFlyFrog[count]));
    };
  },
  setOst: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, currentHotSpot, count } = getState();

      let _ost = {};
      let idx = 0;
      if (currentHotSpot.length) {
        idx = selectedQuestion.rightQuestion.findIndex((rq) => {
          if (currentHotSpot == rq.id) {
            return rq;
          }
        });
      }

      _ost = selectedQuestion.rightQuestion[idx];

      dispatch(setRightOst(_ost));
      dispatch(setSelectedSubQuestion(_ost));
    };
  },
  onDrop: (dropZone) => {
    return (dispatch, getState) => {
      const { draggableValue, setDroppable, dndCount } = getState();

      if (dropZone.id == draggableValue.id) {
        dispatch(setAnswer(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");

        dispatch(setItemsMatched(draggableValue, dropZone));

        dispatch(common.toggleToastMessage(true));
        dispatch(setShowToastFive(false));
      } else if (dndCount > 4) {
        EventManager.broadcast("POSITIVE_FEEDBACK");

        let dropZoneTrue = setDroppable.filter((sd) => {
          if (sd.id == draggableValue.id) {
            return sd;
          }
        });

        dispatch(setItemsMatched(draggableValue, dropZoneTrue[0]));
        dispatch(setShowToastFive(true));
        dispatch(setAnswer(true));
        dispatch(common.toggleToastMessage(true));
      } else {
        EventManager.broadcast("NEGATIVE_FEEDBACK");

        dispatch(setAnswer(false));
        dispatch(common.toggleToastMessage(true));
      }
      dispatch(setDraggableValue(null));
      dispatch(updateAccessibleList(false));
      dispatch(setDnDCount(dndCount + 1));
    };
  },

  handleContinue: () => {
    return (dispatch, getState) => {
      const { getScreen, count, selectedQuestion, getCount } = getState();
      const totalScreen = 4;
      TincanManager.data.percentage = parseInt((getCount / totalScreen) * 100);
      if (TincanManager.data.percentage == 100) {
        TincanManager.data.completed = true;
      }
      TincanManager.saveTincanData();

      dispatch(setCountValue(getCount + 1));
      if (selectedQuestion.id == "butterfly") {
        if (getScreen) {
          dispatch(common.togglePopup(6));
        } else {
          dispatch(common.togglePopup(5));
          dispatch(setCount(count + 1));
        }
      } else {
        if (getScreen) {
          dispatch(common.togglePopup(6));
        } else {
          dispatch(common.togglePopup(3));
        }
      }
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        EventManager.broadcast("COMPLETION_SCREEN");
      });
    };
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(setCount(0));
      dispatch(setScreen(true));
      dispatch(updateDropZone());
      dispatch(setCurrentHotSpot(""));
      dispatch(setCountValue(1));
      dispatch(setVisitedBtn(""));
      dispatch(setDefaultDrop());
      dispatch(droppableChangeFalse());
      dispatch(thunks.setQuestion());
      dispatch(thunks.setOst());
      dispatch(setShowToastFive(false));
      dispatch(setDnDCount(0));
      dispatch(setDefaultDrop());
      dispatch(common.updateResetBtnState(true));

      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      dispatch(togglePopup(1));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
  onDialogClose: () => {
    return (dispatch, getState) => {
      const { visitedHotspotBtn } = getState();
      if (visitedHotspotBtn.length < 4) {
        dispatch(common.setResetFocusState(true));
      }
    };
  },
  handleHotClick: (id) => {
    return (dispatch, getState) => {
      const { visitedHotspotBtn, currentHotSpot } = getState();

      dispatch(setCurrentHotSpot(id));
      dispatch(setShowAlert(true));
      dispatch(thunks.setOst());
      dispatch(setVisitedBtn(id));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));

      let txt1 = data.liveTexts.filter((l) => {
        if (id == l.id) {
          return l;
        }
      });
      dispatch(setDialogText(txt1[0].text));
      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(txt1[0].text));
        }, 500);
      } else {
        dispatch(common.thunks.ariaLiveAssertive(txt1[0].text));
      }
    };
  },
  handleLevelOne: () => {
    return (dispatch, getState) => {
      const { selectedQuestion } = getState();

      dispatch(setDropZone(selectedQuestion));
    };
  },
};
