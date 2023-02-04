import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const DEMO_ACTION = "DEMO_ACTION";
export const SET_ZINDEX_STATUS = "SET_ZINDEX_STATUS";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const ACCESSIBLE_LIST = "ACCESSIBLE_LIST";
export const UPDATE_DROPZONES = "UPDATE_DROPZONES";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const SCENERIO_VISITED = "SCENERIO_VISITED";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const RESET_DROPZONES = "RESET_DROPZONES";
export const SECOND_SCRREN = "SECOND_SCRREN";
export const UPDATE_SECOND_DROPZONES = "UPDATE_SECOND_DROPZONES";
export const RESET_SECOND_DROPZONES = "RESET_SECOND_DROPZONES";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const COMPLETED_ACTIVITY = "COMPLETED_ACTIVITY";
import data from "../data";
export const common = { ...actions };
export const selectDraggable = (data) => ({
  type: SELECT_DRAGGABLE,
  data,
});
export const accessibleList = (value) => ({
  type: ACCESSIBLE_LIST,
  value,
});
export const scenerioVisited = (value) => ({
  type: SCENERIO_VISITED,
  value,
});
export const completedActivity = (value) => ({
  type: COMPLETED_ACTIVITY,
  value,
});
export const secondScreen = (value) => ({
  type: SECOND_SCRREN,
  value,
});
export const resetMatchedItem = () => ({
  type: RESET_MATCHED_ITEMS,
});
export const resetDropzones = () => ({
  type: RESET_DROPZONES,
});
export const resetSecondDropzones = () => ({
  type: RESET_SECOND_DROPZONES,
});
export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});
export const setzindexStatus = (status) => ({
  type: SET_ZINDEX_STATUS,
  status,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});
export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});
export const addMatchedItem = (item) => ({ item, type: ADD_MATCHED_ITEM });
export const updateDropzones = (items) => ({ items, type: UPDATE_DROPZONES });
export const updateSecondDropzones = (items) => ({
  items,
  type: UPDATE_SECOND_DROPZONES,
});
export const thunks = {
  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(secondScreen(false));
      dispatch(resetDropzones());
      dispatch(resetSecondDropzones());
      dispatch(selectDraggable(null));
      dispatch(accessibleList(false));
      dispatch(scenerioVisited(0));
      dispatch(completedActivity(1));
      dispatch(resetMatchedItem());
      dispatch(submitAnswer(false));
      dispatch(wrongAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
  dropCheck: (value) => {
    return (dispatch, getState) => {
      const {
        selectedDraggable,
        dropzones,
        dropzonesScreen2,
        secondScreenValue,
        scenerioVisitedValue,
      } = getState();
      if (selectedDraggable && selectedDraggable.target == value) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 300);

        dispatch(addMatchedItem({ ...selectedDraggable }));
        let _dropzones;
        if (secondScreenValue) {
          _dropzones = [...dropzonesScreen2];
        } else {
          _dropzones = [...dropzones];
        }
        const index = _dropzones.findIndex((d) => d.id == value);
        _dropzones[index] = { ..._dropzones[index], hidden: true };
        if (secondScreenValue) {
          if (scenerioVisitedValue == 1) {
            const index = _dropzones.findIndex((d) => d.id != value);
            _dropzones[index] = {
              ..._dropzones[index],
              class: "disable",
              hidden: true,
            };
          }
          dispatch(updateSecondDropzones(_dropzones));
          dispatch(submitAnswer(true));
          dispatch(common.setResetFocusState(true));
        } else {
          dispatch(common.togglePopup(5));
          dispatch(updateDropzones(_dropzones));
        }
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 300);

        dispatch(wrongAnswer(true));
      }
      dispatch(submitButtonPressed(true));
      setTimeout(() => {
        dispatch(common.toggleToastMessage(true));
      }, 100);
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const {
        scenerioVisitedValue,
        secondScreenValue,
        completedActivityValue,
      } = getState();
      const totalLength =
        data.draggableItemsScreen1.length + data.draggableItemsScreen2.length;
      TincanManager.data.percentage = parseInt(
        (completedActivityValue / totalLength) * 100
      );
      if (TincanManager.data.percentage == 100) {
        TincanManager.data.completed = true;
      }
      TincanManager.saveTincanData();
      const screenVisited = scenerioVisitedValue + 1;
      dispatch(common.setResetFocusState(true));
      dispatch(completedActivity(completedActivityValue + 1));
      dispatch(common.toggleToastMessage(false));
      if (
        screenVisited == data.draggableItemsScreen1.length ||
        screenVisited == data.draggableItemsScreen2.length
      ) {
        EventManager.broadcast("COMPLETION_SCREEN");
        if (secondScreenValue) {
          dispatch(common.togglePopup(7));
        } else {
          dispatch(common.togglePopup(6));
        }
      } else {
        dispatch(scenerioVisited(scenerioVisitedValue + 1));
        dispatch(resetDropzones());
        const dropzoneItem = data.droppableScreen1[
          getState().scenerioVisitedValue
        ].dropItem.map((d) => ({
          ...d,
        }));
        dispatch(resetSecondDropzones());
        dispatch(resetMatchedItem());
        dispatch(updateDropzones(dropzoneItem));
        dispatch(selectDraggable(null));
        dispatch(submitAnswer(false));
        dispatch(wrongAnswer(false));
        dispatch(submitButtonPressed(false));
      }
    };
  },
  draggedItem: (value) => {
    return (dispatch, getState) => {
      const { scenerioVisitedValue, secondScreenValue } = getState();
      let draggableItems;
      if (secondScreenValue) {
        draggableItems =
          data.draggableItemsScreen2[scenerioVisitedValue].dragItem;
      } else {
        draggableItems =
          data.draggableItemsScreen1[scenerioVisitedValue].dragItem;
      }
      const draggableValue = {
        ...draggableItems.find((item) => item.id == value),
      };
      if (draggableValue && draggableValue.id) {
        dispatch(selectDraggable(draggableValue));
      } else {
        dispatch(selectDraggable(null));
      }

      dispatch(wrongAnswer(false));
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(common.updateResetBtnState(false));
    };
  },
  onContinue: (value) => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(6));
      dispatch(scenerioVisited(0));
      dispatch(secondScreen(true));
      dispatch(submitAnswer(false));
      dispatch(wrongAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(resetMatchedItem());
      dispatch(resetDropzones());
    };
  },
};
