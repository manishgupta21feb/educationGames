import data from "../data";
import * as actions from "../../app/actions";

export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const SELECT_DRAGGABLE = "SELECT_DRGGABLE";
export const SET_DROPPED_ITEM = "SET_DROPPED_ITEM";
export const SET_CORRECT_ANSWER = "SET_CORRECT_ANSWER";
export const SET_DRAGGABLE_ITEM = "SET_DRAGGABLE_ITEM";
export const RESET_DROPPED_ITEMS = "RESET_DROPPED_ITEMS";
export const ADD_VISITED_HOTSPOT = "ADD_VISITED_HOTSPOT";
export const UPDATE_DROPPED_ITEMS = "UPDATE_DROPPED_ITEMS";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const SET_NEXT_SCREEN_BUTTON = "SET_NEXT_SCREEN_BUTTON";
export const TOGGLE_ACCESSIBLE_LIST = "TOGGLE_ACCESSIBLE_LIST";
export const SET_STAR_PATHWAY_OPTION = "SET_STAR_PATHWAY_OPTION";
export const UPDATE_DROPZONES_SCREEN4 = "UPDATE_DROPZONES_SCREEN4";
export const UPDATE_DRAGGABLES_SCREEN4 = "UPDATE_DRAGGABLES_SCREEN4";
export const NEXT_BUTTON_CLICKED = "NEXT_BUTTON_CLICKED";
const {
  togglePopup,
  onChangeScreen,
  setResetFocusState,
  toggleToastMessage,
  updateResetBtnState,
} = actions;

export const resetDroppedItems = () => ({ type: RESET_DROPPED_ITEMS });
export const setDroppedItem = (item) => ({ item, type: SET_DROPPED_ITEM });
export const resetVisitedHotspots = () => ({ type: RESET_VISITED_HOTSPOTS });
export const selectHotspot = (hotspot) => ({ hotspot, type: SELECT_HOTSPOT });
export const setDraggableItem = (item) => ({ item, type: SET_DRAGGABLE_ITEM });
export const updateDroppedItems = (item) => ({
  item,
  type: UPDATE_DROPPED_ITEMS,
});
export const toggleAccessibleList = (show) => ({
  show,
  type: TOGGLE_ACCESSIBLE_LIST,
});
export const setStarPathwayOption = (option) => ({
  option,
  type: SET_STAR_PATHWAY_OPTION,
});
export const setNextScreenButton = (show) => ({
  show,
  type: SET_NEXT_SCREEN_BUTTON,
});
export const addVisitedHotspot = (hotspot) => ({
  hotspot,
  type: ADD_VISITED_HOTSPOT,
});
export const selectDraggable = (draggable) => ({
  draggable,
  type: SELECT_DRAGGABLE,
});
export const setCorrectAnswer = (answer) => ({
  answer,
  type: SET_CORRECT_ANSWER,
});
export const updateDropzonesScreen4 = (dropzones) => ({
  dropzones,
  type: UPDATE_DROPZONES_SCREEN4,
});
export const updateDraggablesScreen4 = (draggables) => ({
  draggables,
  type: UPDATE_DRAGGABLES_SCREEN4,
});
export const nextButtonClicked = (value) => ({
  value,
  type: NEXT_BUTTON_CLICKED,
});
export const thunks = {
  setDraggableItem: (id) => (dispatch, getState) => {
    dispatch(setDraggableItem(id));
    dispatch(nextButtonClicked(false));
    dispatch(toggleToastMessage(false));
    EventManager.broadcast("STOP_ALL");
    if (getState().resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },

  onDrop: (dropzone) => (dispatch, getState) => {
    const { droppedItems, draggableItem, currentScreen } = getState();
    if (
      dropzone &&
      draggableItem &&
      droppedItems.indexOf(draggableItem) == -1
    ) {
      dispatch(setResetFocusState(true));
      dispatch(setDroppedItem(draggableItem));

      const draggableItemValue = data.draggables.screen0.find(
        (x) => x.id == draggableItem
      );
      dispatch(common.ariaLiveText(draggableItemValue.videoLive));
      dispatch(updateDroppedItems(draggableItem));
    }
  },

  setStarPathwayOption: (option) => (dispatch, getState) => {
    dispatch(toggleToastMessage(false));
    dispatch(setStarPathwayOption(option));
  },

  handleMoveToNextScreen: () => (dispatch, getState) => {
    const { currentScreen } = getState();
    const { draggablesScreen4 } = getState();
    dispatch(setCorrectAnswer(false));
    dispatch(nextButtonClicked(true));
    dispatch(toggleToastMessage(false));
    if (currentScreen == 3) {
      if (draggablesScreen4.length) {
        dispatch(setCorrectAnswer(false));
        dispatch(setResetFocusState(true));
        const d = [...draggablesScreen4];
        const _d = { ...d.splice(0, 1)[0] };
        dispatch(selectDraggable(_d));
        dispatch(updateDraggablesScreen4(d));
      } else {
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(togglePopup(5));
      }
    } else {
      dispatch(setNextScreenButton(false));
      if (currentScreen < 3) {
        dispatch(setResetFocusState(true));
        if (currentScreen == 0 && getState().droppedItems.length < 3) {
        } else {
          dispatch(common.onChangeScreen(currentScreen + 1));
        }
      }
      if (currentScreen == 2) {
        dispatch(setNextScreenButton(true));
        const d = [...draggablesScreen4];
        const _d = { ...d.splice(0, 1)[0] };
        dispatch(selectDraggable(_d));
        dispatch(updateDraggablesScreen4(d));
      }
    }
  },

  submitAnswer: () => (dispatch, getState) => {
    dispatch(toggleToastMessage(false));
    const { starPathwayOption } = getState();
    const correctAnswer = data.mcqAnswer == starPathwayOption;
    dispatch(setCorrectAnswer(correctAnswer));
    setTimeout(() => {
      dispatch(toggleToastMessage(true));
    }, 1);
    setTimeout(() => {
      EventManager.broadcast(
        correctAnswer ? "POSITIVE_FEEDBACK" : "NEGATIVE_FEEDBACK"
      );
    }, 200);
    if (correctAnswer) {
      dispatch(setNextScreenButton(true));
    }
  },

  selectHotspot: (id) => (dispatch, getState) => {
    dispatch(selectHotspot(id));
    const { visitedHotspots } = getState();
    if (id && visitedHotspots.indexOf(id) == -1) {
      dispatch(addVisitedHotspot(id));
    }
  },

  onDropScreen4: (dropzone) => (dispatch, getState) => {
    const { draggableItem, dropzonesScreen4 } = getState();
    const correctAnswer =
      dropzone && draggableItem && dropzone == draggableItem;
    if (correctAnswer) {
      dispatch(setResetFocusState(true));
    }
    dispatch(setCorrectAnswer(correctAnswer));
    dispatch(toggleToastMessage(true));
    setTimeout(() => {
      EventManager.broadcast(
        correctAnswer ? "POSITIVE_FEEDBACK" : "NEGATIVE_FEEDBACK"
      );
    }, 200);
    if (correctAnswer) {
      const index = dropzonesScreen4.findIndex((d) => d.id == dropzone);
      const _d = [...dropzonesScreen4];
      _d[index] = { ..._d[index] };
      _d[index].hidden = true;
      dispatch(updateDropzonesScreen4(_d));

      const draggableItemValue = data.draggables.screen1.find(
        (x) => x.id == draggableItem
      );
      dispatch(common.ariaLiveText(draggableItemValue.live));
    }
  },

  onAccessibleItemClick: (item) => (dispatch, getState) => {
    const { currentScreen } = getState();
    const { id } = item;
    if (currentScreen == 0) {
      dispatch(thunks.onDrop(id));
    } else if (currentScreen == 3) {
      dispatch(thunks.onDropScreen4(id));
    }
  },

  resetActivity: () => (dispatch, getState) => {
    dispatch(nextButtonClicked(true));
    dispatch(onChangeScreen(0));
    dispatch(resetDroppedItems());
    dispatch(setDroppedItem(null));
    dispatch(selectDraggable(null));
    dispatch(setDraggableItem(null));
    dispatch(resetVisitedHotspots());
    dispatch(setCorrectAnswer(false));
    dispatch(setStarPathwayOption(""));
    dispatch(updateResetBtnState(true));
    dispatch(toggleToastMessage(false));
    dispatch(setNextScreenButton(false));
    dispatch(toggleAccessibleList(false));
    dispatch(
      updateDropzonesScreen4(data.dropzones.screen1.map((d) => ({ ...d })))
    );
    dispatch(
      updateDraggablesScreen4(data.draggables.screen1.map((d) => ({ ...d })))
    );
    const { currentPopup } = getState();
    if (currentPopup.indexOf(2) >= 0) {
      dispatch(togglePopup(2));
    }
    if (currentPopup.indexOf(5) >= 0) {
      dispatch(togglePopup(5));
    }
    dispatch(togglePopup(1));
  },
};
export const common = { ...actions };
