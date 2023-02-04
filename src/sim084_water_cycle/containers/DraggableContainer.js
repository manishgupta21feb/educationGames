import { connect } from "react-redux";
import Draggable from "../components/Draggable";

import data from "../data";
import {
  common,
  thunks,
  setDraggableValue,
  updateAccessibleList,
} from "../actions";

const mapState = (state) => {
  return {
    data: data,
    matchedItems: state.matchedItems,
    draggables: data.draggable,
    isPopupActive: !!state.currentPopup.length,
    holdSingleDrag: state.holdSingleDrag,
    submitButtonState: state.submitButtonState,
    nextButtonState: state.NextButtonState,
    showAlert: state.showAlert,
    setDraggable: state.setDraggable,
  };
};

const matchDispatch = (dispatch) => ({
  onDropClick: (item) => {
    dispatch(thunks.onDrop(item));
  },
  updateAccessibleList: (val) => {
    dispatch(updateAccessibleList(val));
  },
  setDraggableValue: (item) => {
    dispatch(setDraggableValue(item));
  },
});

export default connect(mapState, matchDispatch)(Draggable);
