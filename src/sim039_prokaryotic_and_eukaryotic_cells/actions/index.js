import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const common = { ...actions };

const {
  ariaLiveText,
  togglePopup,
  updateResetBtnState,
  setResetFocusState,
  toggleToastMessage,
} = actions;

export const ELEMENT_DATA = "ELEMENT_DATA";
export const DROP_ELEMENT = "DROP_ELEMENT";
export const UPDATE_STAGE = "UPDATE_STAGE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const UPDATE_ATTEMPT = "UPDATE_ATTEMPT";
export const SIMULATION_END = "SIMULATION_END";
export const RESET_BTN_STATE = "RESET_BTN_STATE";
export const UPDATE_SHOW_NEXT = "UPDATE_SHOW_NEXT";
export const RESET_DROPPED_AT = "RESET_DROPPED_AT";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const UPDATE_DROPPED_AT = "UPDATE_DROPPED_AT";
export const SHOW_TOAST_MESSAGE = "SHOW_TOAST_MESSAGE";
export const SET_DROPPED_MATCHED = "SET_DROPPED_MATCHED";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";
export const EMPTY_DROPPED_ELEMENTS = "EMPTY_DROPPED_ELEMENTS";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const COUNT_ATTEMPTS = "COUNT_ATTEMPTS";

export const selectDraggable = (val) => ({
  val,
  type: SELECT_DRAGGABLE,
});

export const updateElementData = (val) => ({ val, type: ELEMENT_DATA });
export const updateAttemptData = (val) => ({ val, type: UPDATE_ATTEMPT });
export const updateDropElement = (val) => ({ val, type: DROP_ELEMENT });

export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const simulationEnd = (val) => ({ val, type: SIMULATION_END });

export const updateStage = (val) => ({ val, type: UPDATE_STAGE });

export const updateShowNext = (val) => ({ val, type: UPDATE_SHOW_NEXT });

export const addMatchedItem = (item) => ({
  item,
  type: ADD_MATCHED_ITEM,
});

export const resetMatchedItem = () => ({ type: RESET_MATCHED_ITEMS });

export const updateDroppedAt = (name, key) => ({
  name,
  key,
  type: UPDATE_DROPPED_AT,
});

export const resetDroppedAt = () => ({ type: RESET_DROPPED_AT });

export const emptyDroppedElements = () => ({
  type: EMPTY_DROPPED_ELEMENTS,
});

export const setDroppedMatched = (matched) => ({
  matched,
  type: SET_DROPPED_MATCHED,
});
export const setActivityCompleted = (completed) => ({
  completed,
  type: SET_ACTIVITY_COMPLETED,
});

export const countAttempts = (value) => {
  return {
    value,
    type: COUNT_ATTEMPTS,
  };
};

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

export const thunks = {
  fetchElements: () => {
    return (dispatch, getState) => {
      const { selectedStage } = getState();
      dispatch(
        updateElementData(
          helper.shuffleArray([...data[selectedStage].elements])
        )
      );
    };
  },

  checkIfActivityCompleted: () => {
    return (dispatch, getState) => {
      const { elementData, matchedItems } = getState();
      const sum = Object.keys(matchedItems).reduce(
        (a, key) => matchedItems[key].length + a,
        0
      );

      if (sum === elementData.length) {
        dispatch(setActivityCompleted(true));
        // dispatch(setResetFocusState(true));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
          dispatch(togglePopup(5));
        }, 500);
      }
    };
  },

  resetGame: () => {
    return (dispatch, getState) => {
      dispatch(simulationEnd(true));
      dispatch(updateStage("stage1"));
      dispatch(togglePopup(1));
      dispatch(
        updateElementData(helper.shuffleArray([...data.stage1.elements]))
      );
      dispatch(updateDropElement([]));
      dispatch(updateResetBtnState(false));
      dispatch(updateAccessibleList(false));
      dispatch(updateShowNext(false));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      dispatch(resetMatchedItem());
      dispatch(emptyDroppedElements());
      dispatch(setDroppedMatched(false));
      dispatch(countAttempts(1));
      dispatch(setActivityCompleted(false));
      TincanManager.resetTincanData();
    };
  },

  checkDroppedItem: (dropzone) => (dispatch, getState) => {
    const {
      selectedDraggable: { target, value, drop },
      countAttempts: count,
    } = getState();

    if (target) {
      if (dropzone.name == target) {
        const name = value;
        const droppedAt = drop;
        const livetext = data.onDropText
          .replace("-1-", name)
          .replace("-2-", droppedAt);
        // dispatch(setResetFocusState(true));
        dispatch(ariaLiveText(livetext));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
        dispatch(addMatchedItem({ ...getState().selectedDraggable }));
        dispatch(thunks.checkIfActivityCompleted());
        dispatch(setDroppedMatched(true));
        dispatch(countAttempts(count + 1));
        if (count < data.stage1.elements.length) {
          TincanManager.data.percentage = parseInt(
            (count / data.stage1.elements.length) * 100
          );
          TincanManager.saveTincanData();
          console.log("count", count);
        } else {
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }
      } else {
        dispatch(setDroppedMatched(false));
        dispatch(updateToastMsg("incorrect"));
        dispatch(toggleToastMessage(true));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    }
    // dispatch(updateResetBtnState(false));
    dispatch(selectDraggable(null));
  },

  selectDraggable: (item) => (dispatch) => {
    dispatch(selectDraggable(item));
    if (item) {
      dispatch(toggleToastMessage(false));
    }
  },
};
