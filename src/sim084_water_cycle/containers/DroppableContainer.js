import { connect } from "react-redux";
import Droppable from "../components/Droppable";

import data from "../data";
import { common, thunks, droppableChangeState } from "../actions";

const mapState = (state) => {
  return {
    dropZone: data.droppable,
    matchedItems: state.matchedItems,
    arrows: data.arrows,
    holdSingleDrag: state.holdSingleDrag,
    submitButtonState: state.submitButtonState,
    accessibleListVisible: state.accessibleListVisible,
  };
};

const matchDispatch = (dispatch) => ({
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },
  droppableChangeState: (value, blnState) => {
    dispatch(droppableChangeState(value, blnState));
  },
});

export default connect(mapState, matchDispatch)(Droppable);
