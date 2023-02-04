import MainActivity from "../components/mainActivity";
import { connect } from "react-redux";

import data from "../data";
import { common, setDraggableItem } from "../actions";
import { togglePopup } from "../../app/actions";

const mapState = (state) => {
  return {
    toastMsg: state.toastMsg,
    showNext: state.showNext,
    elementData: state.elementData,
    currentPopup: state.currentPopup,
    itemDroppedAt: state.itemDroppedAt,
    resetBtnState: state.resetBtnState,
    draggableItem: state.draggableItem,
    instructionText: data.instructionText,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    accessibleListVisible: state.accessibleListVisible,
  };
};

const mapDispatch = (dispatch) => ({
  updateResetBtnState: (val) => {
    dispatch(common.updateResetBtnState(val));
  },
  toggleToastMessage: (state) => {
    dispatch(common.toggleToastMessage(state));
  },

  setDraggableItem: (a) => {
    dispatch(setDraggableItem(a));
  },
});

export default connect(mapState, mapDispatch)(MainActivity);
