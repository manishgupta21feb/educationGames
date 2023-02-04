import Draggable from "../components/FullView/Draggable";
import { connect } from "react-redux";

import {
  common,
  setForceBegin,
  setDropZones,
  setUpdateAccessibleList,
  setCurrentDraggable,
  thunk,
} from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    // From Data

    currentStrength: state.getTotalStrength,
    dropZoneData: state.getDropZones,
    draggableText: data,

    //From Reducer
    draggableData: state.getDragData,
    getDroppedItems: state.getDroppedItems,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onDragElement: (_data) => {
    dispatch(common.toggleToastMessage(false));
    dispatch(setCurrentDraggable(_data));
  },

  onEnterKey: (_data) => {
    dispatch(setUpdateAccessibleList(true));
    dispatch(setCurrentDraggable(_data));
  },
});

export default connect(mapState, mapDispatch)(Draggable);
