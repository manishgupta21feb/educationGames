import Draggable from "../components/Draggable";
import { connect } from "react-redux";
import data from "../data";
import {
  common,
  thunk,
  setCurrentDraggingItem,
  setUpdateAccessibleList,
} from "../actions";

const mapState = (state) => {
  return {
    // From Data
    submitBtnText: data.buttonLabels.submitAnswer,
    nextBtnText:
      state.getSubmitCount == data.lives.length
        ? data.buttonLabels.finish
        : data.buttonLabels.next,

    //From Reducer
    draggableData: state.getDragData[state.getDndScreenFor],
    getDroppedItems: state.getDroppedItems,
    result: state.getResult,
    getDndScreenFor: state.getDndScreenFor,
    getSubmitCount: state.getSubmitCount,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onDragElement: (evt) => {
    dispatch(setCurrentDraggingItem(evt));
    dispatch(common.toggleToastMessage(false));
  },

  onEnterKey: (evt) => {
    dispatch(setUpdateAccessibleList(true));
    dispatch(setCurrentDraggingItem(evt));
    dispatch(common.toggleToastMessage(false));
  },

  onAnswerSubmit: () => {
    dispatch(thunk.onAnswerSubmit());
  },

  onNext: () => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(thunk.onNext());
    }, 150);
  },
});

export default connect(mapState, mapDispatch)(Draggable);
