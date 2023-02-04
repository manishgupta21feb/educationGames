import { connect } from "react-redux";
import LeftArea from "../components/LeftView/Droppable.js";

import data from "../data";
import {
  setAccessible,
  selectDraggable,
  thunks,
  droppableChangeState,
} from "../actions";

const mapState = (state) => {
  return {
    dropzones: state.setDroppable,
    data: data,
    buttonLabels: data.buttonLabels,
    isAccessible: state.isAccessible,

    currentPopup: state.currentPopup,
    matchedItems: state.matchedItems,
    activeDropzone: state.activeDropzone,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.selectedDraggable,
    list: state.setDroppable,
    accessibleListVisible: state.accessibleListVisible,
  };
};

const mapDispatch = (dispatch) => ({
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },
  droppableChangeState: (value, blnState) => {
    dispatch(droppableChangeState(value, blnState));
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
