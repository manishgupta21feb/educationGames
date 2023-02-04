import { connect } from "react-redux";
import Draggable from "../components/activity/Draggable";

import data from "../data";
import { thunks, common, updateAccessibleList } from "../actions";

const mapState = (state) => {
  return {
    dropElement: state.dropElement,
    updateAttemptData: state.updateAttempt,
    dropElement: state.dropElement,
    droppableAltText: data.droppableAltText,
    elementData: data.elementData,
    resetBtnState: state.resetBtnState,
    simulationEnd: state.simulationEnd,
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
  updateAccessibleList: (val) => {
    dispatch(updateAccessibleList(val));
  },
});

export default connect(mapState, mapDispatch)(Draggable);
