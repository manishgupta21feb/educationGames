import { connect } from "react-redux";
import DroppableItem from "../components/Screens/FullView/DroppableList/DroppableItem";

import {
  setFocusOnList,
  disableDraggable,
  disableDroppable,
  setFocusonDragItem,
  selectDraggableFull,
} from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    droppedItems: state.droppedItems,
    dropElement: state.dropElement,
    focusedAnswerId: state.setFocusOnList,
    selectedDraggable: state.selectDraggableFull,
    dragList: state.optionsData,
    droppableQuestion: state.questionsList,
  };
};

const mapDispatch = (dispatch) => ({
  disableDroppable: (answerId, isDisable, markedAnswer) => {
    dispatch(disableDroppable(answerId, isDisable, markedAnswer));
  },
  disableDraggable: (answerId, isDisable) => {
    dispatch(disableDraggable(answerId, isDisable));
  },
  setFocusonDragItem: (answerId) => {
    dispatch(setFocusonDragItem(answerId));
  },
  selectDraggableFull: (answerId) => dispatch(selectDraggableFull(answerId)),
  setFocusOnList: (answerId) => dispatch(setFocusOnList(answerId)),
});

export default connect(mapState, mapDispatch)(DroppableItem);
