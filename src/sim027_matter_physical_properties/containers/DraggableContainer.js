import { connect } from "react-redux";
import Draggable from "../components/Draggable";

import data from "../data";
import { common, setDraggableItem, updateAccessibleList } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    dropElement: state.dropElement,
    itemDroppedAt: state.itemDroppedAt,
    resetBtnState: state.resetBtnState,
    isPopupActive: !!state.currentPopup.length,
    accessibleListVisible: state.accessibleListVisible,
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
});

export default connect(mapState, mapDispatch)(Draggable);
