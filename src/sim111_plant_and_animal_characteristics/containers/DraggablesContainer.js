import { connect } from "react-redux";
import Draggables from "../components/Right/Draggables";

import data from "../data";
import { common, thunks, setAccessible, setzindexStatus } from "../actions";

const mapState = (state) => {
  return {
    isAccessible: state.isAccessible,
    draggable: state.isSecondScreenEnable
      ? state.monekeydraggables
      : state.treedraggables,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.selectedDraggable,
    matchedItems: state.matchedItems,
    isSecondScreenEnable: state.isSecondScreenEnable,
    selectedDraggable: state.selectedDraggable,
    currentPopup: state.currentPopup,
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

  setzindexStatus: (status) => {
    dispatch(setzindexStatus(status));
  },
});

export default connect(mapState, mapDispatch)(Draggables);
