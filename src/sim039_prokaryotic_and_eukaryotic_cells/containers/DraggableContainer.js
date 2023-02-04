import Draggable from "../components/Draggable";
import { connect } from "react-redux";

import data from "../data";
import { common, thunks, updateAccessibleList } from "../actions";

const mapState = (state) => {
  const selectedStage = state.selectedStage;
  return {
    isPopupActive: !!state.currentPopup.length,
    data: data[selectedStage],
    resetBtnState: state.resetBtnState,
    dropElement: state.dropElement,
    droppableAltText: data[selectedStage].droppableAltText,
    simulationEnd: state.simulationEnd,
    selectedStage: state.selectedStage,
    droppableDetail: data[selectedStage].droppableDetail,
    elementData: state.elementData,
    matchedItems: state.matchedItems,
  };
};

const mapDispatch = (dispatch) => ({
  onCorrectDrop: (currentOption) => {
    dispatch(thunks.onCorrectDrop(currentOption));
  },
  onInCorrectDrop: () => {
    dispatch(thunks.onInCorrectDrop());
  },
  updateAttempt: (val) => {
    dispatch(thunks.updateAttempt(val));
  },
  updateResetBtnState: (val) => {
    dispatch(common.updateResetBtnState(val));
  },
  updateAccessibleList: (val) => {
    dispatch(updateAccessibleList(val));
  },
  showToastMessage: (value) => {
    dispatch(common.toggleToastMessage(value));
  },
  selectDraggable: (val) => {
    dispatch(thunks.selectDraggable(val));
  },
  checkDroppedItem: (val) => {
    dispatch(thunks.checkDroppedItem(val));
  },
});

export default connect(mapState, mapDispatch)(Draggable);
