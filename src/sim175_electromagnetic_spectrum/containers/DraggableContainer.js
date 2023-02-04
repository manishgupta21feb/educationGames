import { connect } from "react-redux";
import Draggable from "../components/activity/Draggable";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  const selectedQuestion = state.selectedQuestion;
  let wavelengthMapData;
  if (selectedQuestion === 1 || selectedQuestion === 2) {
    wavelengthMapData = data.wavelengthData1;
  } else if (selectedQuestion === 3 || selectedQuestion === 4) {
    wavelengthMapData = data.wavelengthData2;
  }
  let listItems;
  if (selectedQuestion == 1) {
    listItems = data.wavelengthList.listitems4;
  } else if (selectedQuestion == 2) {
    listItems = data.frequencyList.listitems4;
  } else if (selectedQuestion == 3) {
    listItems = data.wavelengthList.listitems3;
  } else {
    listItems = data.frequencyList.listitems3;
  }
  return {
    elementData: wavelengthMapData,
    dropElement: state.dropElement,
    dropElement: state.dropElement,
    droppedItems: state.droppedItems,
    showAnimation: state.showAnimation,
    resetBtnState: state.resetBtnState,
    updateAttemptData: state.updateAttempt,
    droppableAltText: data.droppableAltText,
    listItemsLength: listItems.length,
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
