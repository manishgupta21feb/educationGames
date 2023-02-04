import { connect } from "react-redux";
import Draggable from "../components/activity/Draggable";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  const droppableAltText= state.selectedQuestion == 1?data.droppableAltTextOne:state.selectedQuestion===2?data.droppableAltTextTwo:data.droppableAltTextThree;

 
  return {
    elementData: data.elementData,
    dropElement: state.dropElement,
    dropElement: state.dropElement,
    droppedItems: state.droppedItems,
    showAnimation: state.showAnimation,
    resetBtnState: state.resetBtnState,
    updateAttemptData: state.updateAttempt,
    droppableAltText,
    selectedQuestion: state.selectedQuestion,
  };
};

const mapDispatch = (dispatch) => ({
  onInCorrectDrop: () => {
    dispatch(thunks.onInCorrectDrop());
  },
  onCorrectDrop: (currentOption) => {
    dispatch(thunks.onCorrectDrop(currentOption));
  },
  updateAttempt: (val) => {
    dispatch(thunks.updateAttempt(val));
  },
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  showToastMessage: (value) => {
    dispatch(common.toggleToastMessage(value));
  },
  updateResetBtnState: (val) => {
    dispatch(common.updateResetBtnState(val));
  },
});

export default connect(mapState, mapDispatch)(Draggable);
