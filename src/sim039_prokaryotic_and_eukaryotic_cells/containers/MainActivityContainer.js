import MainActivity from "../components/MainActivity";
import { connect } from "react-redux";
import {
  common,
  thunks,
  addMatchedItem,
  updateAttemptData,
  updateDropElement,
} from "../actions";

import data from "../data";

const mapState = (state) => {
  const selectedStage = state.selectedStage;
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data[selectedStage].instructionText,
    selectedStage: selectedStage,
    showNext: state.showNext,
    elementData: state.elementData,
    matchedItems: state.matchedItems,
    droppedMatched: state.droppedMatched,
    selectedDraggable: state.selectedDraggable,
    activityHeading: data.activityHeading,
  };
};

const mapDispatch = (dispatch) => ({
  updateResetBtnState: (val) => {
    dispatch(common.updateResetBtnState(val));
  },
  onCorrectDrop: (currentOption) => {
    dispatch(thunks.onCorrectDrop(currentOption));
  },
  onInCorrectDrop: (item) => {
    dispatch(thunks.onInCorrectDrop({ ...item }));
  },
  updateAttempt: (val) => {
    dispatch(updateAttemptData(val));
  },
  addItem: (item) => {
    dispatch(addMatchedItem({ ...item }));
  },
  updateDropElement: (val) => {
    dispatch(updateDropElement(val));
  },
  selectDraggable: (val) => {
    dispatch(thunks.selectDraggable(val));
  },
  checkDroppedItem: (val) => {
    dispatch(thunks.checkDroppedItem(val));
  },
  resetFocus: (value) => {
    dispatch(common.setResetFocusState(value));
  },
});

export default connect(mapState, mapDispatch)(MainActivity);
