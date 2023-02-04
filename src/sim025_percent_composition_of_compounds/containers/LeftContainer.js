import { connect } from "react-redux";
import Left from "../components/mainActivity/Left";

import data from "../data";
import {
  common,
  thunks,
  setShowDropZone,
  setHideDroppedItem,
} from "../actions";

const mapState = (state) => {
  return {
    toastMsg: state.toastMsg,
    showNext: state.showNext,
    viewType: state.viewType,
    elementData: state.elementData,
    matchedItems: state.matchedItems,
    currentPopup: state.currentPopup,
    resetBtnState: state.resetBtnState,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.instructionText[state.viewType],
  };
};

const mapDispatch = (dispatch) => ({
  updateResetBtnState: (val) => {
    dispatch(common.updateResetBtnState(val));
  },

  setShowDropZone: (val) => {
    dispatch(setShowDropZone(val));
  },

  matchDraggedItem: (item) => {
    dispatch(thunks.matchDraggedItem({ ...item }));
  },

  setHideDroppedItem: (value) => {
    dispatch(setHideDroppedItem(value));
  },
});

export default connect(mapState, mapDispatch)(Left);
