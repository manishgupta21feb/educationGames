import Drag from "../components/Draggable/index";

import {
  common,
  thunks,
  setDragType,
  setDraggableItem,
  updateAccessibleList,
  accessibleDroppedItem,
  clearButtonPressed,
} from "../actions";
import { connect } from "react-redux";
import { setResetFocusState } from "../../app/actions";

const mapState = (state) => {
  const isDisable =
    state.droppedAtOne.length > 0 &&
    state.droppedAtTwo.length > 0 &&
    state.droppedAtThree.length > 0 &&
    state.droppedAtFour.length > 0 &&
    state.droppedAtFive.length > 0 &&
    state.droppedAtSix.length > 0 &&
    state.droppedAtSeven.length > 0;

  return {
    items:
      state.circuitName == "parallel"
        ? state.draggables
        : state.seriesDraggbale,
    selectedDraggable: state.draggableItem,
    clearButtonPressed: state.clearButton,
    isPopupActive: !!state.currentPopup.length,
    correctAnswer: state.correctAnswer,
    droppableFull: isDisable ? true : false,
    circuitNameProps: state.circuitName,
  };
};
const matchDispatch = (dispatch) => ({
  setDraggable: (item) => {
    dispatch(setDraggableItem(item));
  },
  setDragType: (type) => {
    dispatch(setDragType({ ...type }));
  },
  droppedData: (a, b) => {
    dispatch(thunks.storeDroppedData(a, b));
  },
  addObjects: (name) => {
    dispatch(thunks.addObjects(name));
  },
  updateAccessibleList: (value) => {
    dispatch(updateAccessibleList(value));
  },
  accessibleDroppedItem: (value) => {
    dispatch(accessibleDroppedItem(value));
  },
  clearButtonState: (value) => {
    dispatch(clearButtonPressed(value));
  },
  setResetFocusState: (value) => {
    dispatch(setResetFocusState(value));
  },
});

export default connect(mapState, matchDispatch)(Drag);
