import { connect } from "react-redux";
import Draggable from "../components/Draggable";

import data from "../data";
import {
  common,
  setShowDropZone,
  setDraggableItem,
  setHideDroppedItem,
  updateAccessibleList,
} from "../actions";

const mapState = (state) => {
  return {
    data: data,
    dropElement: state.dropElement,
    simulationEnd: state.simulationEnd,
    resetBtnState: state.resetBtnState,
    droppableDetail: data.droppableDetail,
    droppableAltText: data.droppableAltText,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  updateResetBtnState: (val) => {
    dispatch(common.updateResetBtnState(val));
  },
  updateAccessibleList: (val) => {
    dispatch(updateAccessibleList(val));
  },
  showToastMessage: (value) => {
    dispatch(common.toggleToastMessage(value));
  },
  setDraggableItem: (item) => {
    dispatch(setDraggableItem(item));
  },

  setShowDropZone: (val) => {
    dispatch(setShowDropZone(val));
  },
  setHideDroppedItem: (value) => {
    dispatch(setHideDroppedItem(value));
  },
});

export default connect(mapState, mapDispatch)(Draggable);
