import { connect } from "react-redux";
import LeftArea from "../components/Left";

import data from "../data";
import { setAccessible, selectDraggable, thunks } from "../actions";

const mapState = (state) => ({
  dropzones: data.dropzones,
  buttonLabels: data.buttonLabels,
  isAccessible: state.isAccessible,
  droppedItems: state.droppedItems,
  currentPopup: state.currentPopup,
  activeDropzone: state.activeDropzone,
  isPopupActive: !!state.currentPopup.length,
  selectedDraggable: state.selectedDraggable,
});

const mapDispatch = (dispatch) => ({
  selectDraggable: (draggable) => {
    if (draggable && draggable.id) {
      dispatch(selectDraggable({ ...draggable }));
    } else {
      dispatch(selectDraggable(null));
    }
  },
  setAccessible: (a) => {
    dispatch(setAccessible(a));
  },
  dropItem: (item) => {
    dispatch(thunks.checkDrop(item));
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
