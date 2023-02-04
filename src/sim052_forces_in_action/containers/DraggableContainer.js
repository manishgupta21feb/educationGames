import Draggable from "../components/Draggable";
import { connect } from "react-redux";

import {
  common,
  setForceBegin,
  setDropZones,
  setUpdateAccessibleList,
  setCurrentDraggable,
  thunk,
} from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  const data = state.getData;
  return {
    // From Data
    testBtnText: data.buttonLabelsData.test,
    currentStrength: state.getTotalStrength,
    dropZoneData: state.getDropZones,
    draggableText: state.getData,

    //From Reducer
    draggableData: state.getDragData,
    getDroppedItems: state.getDroppedItems,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onDragElement: (data) => {
    dispatch(common.toggleToastMessage(false));
  },

  onEnterKey: (_data, objectName = "") => {
    dispatch(setUpdateAccessibleList(true));
    dispatch(setDropZones(_data));
    dispatch(setCurrentDraggable(objectName));
  },
  onAnswerSubmit: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setForceBegin(true));
    dispatch(thunk.videoAriaLive());
    dispatch(common.setResetFocusState(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 200);
  },
});

export default connect(mapState, mapDispatch)(Draggable);
