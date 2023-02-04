import { connect } from "react-redux";
import Draggables from "../components/Right/Draggables";

import data from "../data";
import { common, thunks, setAccessible } from "../actions";

const mapState = (state) => {
  return {
    isAccessible: state.isAccessible,
    draggableItems: state.draggableItems,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.selectedDraggable,
  };
};

const mapDispatch = (dispatch) => ({
  setAccessible: (a) => {
    dispatch(setAccessible(a));
  },
  selectDraggable: (draggable) => {
    if (draggable && draggable.id) {
      dispatch(thunks.selectDraggable({ ...draggable }));
    } else {
      dispatch(thunks.selectDraggable(null));
    }
  },
  toggleToastMessage: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(Draggables);
