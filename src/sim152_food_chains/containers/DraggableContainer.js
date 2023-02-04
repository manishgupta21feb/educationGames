import Drag from "../components/FullViewComponent/Draggables/Draggables";

import {
  common,
  thunks,
  setDragType,
  setDraggableItem,
  updateAccessibleList,
  accessibleDroppedItem,
  clearButtonPressed,
  addDraggableId,
} from "../actions";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    items: state.draggables,
    selectedDraggable: state.draggableItem,
    isPopupActive: !!state.currentPopup.length,
    correctAnswer: state.correctAnswer,
    dragIds: state.dragIds,
  };
};
const matchDispatch = (dispatch) => ({
  setDraggable: (item) => {
    dispatch(setDraggableItem(item));
  },
  updateAccessibleList: (value) => {
    dispatch(updateAccessibleList(value));
  },
});

export default connect(mapState, matchDispatch)(Drag);
