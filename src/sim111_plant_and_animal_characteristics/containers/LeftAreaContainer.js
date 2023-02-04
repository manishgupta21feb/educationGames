import { connect } from "react-redux";
import LeftArea from "../components/Left";

import data from "../data";
import { setAccessible, selectDraggable, thunks } from "../actions";

const mapState = (state) => ({
  dropzones: state.isSecondScreenEnable
    ? state.monkeyDropzones
    : state.treeDropzones,
  monkeyDropzones: state.monkeyDropzones,
  buttonLabels: data.buttonLabels,
  isAccessible: state.isAccessible,
  droppedItems: state.droppedItems,
  currentPopup: state.currentPopup,
  isPopupActive: !!state.currentPopup.length,
  selectedDraggable: state.selectedDraggable,
  isSecondScreenEnable: state.isSecondScreenEnable,
  firstActivityCompleted: state.firstActivityCompleted,
  activityCompleted: state.activityCompleted,
  menkeyDroppableImgAria: data.menkeyDroppableImgAria,
  treeDroppableImgAria: data.treeDroppableImgAria,
  monekyFinalImageAria: data.monekyFinalImageAria,
  treeFinalImageAria: data.treeFinalImageAria,
  leftImgAria: state.leftImgAria,
});

const mapDispatch = (dispatch) => ({
  selectDraggable: (draggable) => {
    if (draggable && draggable.id) {
      dispatch(selectDraggable(draggable));
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
