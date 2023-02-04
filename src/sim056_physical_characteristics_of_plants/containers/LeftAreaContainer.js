import { connect } from "react-redux";
import LeftArea from "../components/Left/index";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  dropzones: data.dropzones,
  buttonLabels: data.buttonLabels,
  isAccessible: state.isAccessible,
  currentPopup: state.currentPopup,
  activeDropzone: state.activeDropzone,
  isPopupActive: !!state.currentPopup.length,
  selectedDraggable: state.selectedDraggable,
  selectedOptions: state.selectedOptions,
  toastMsg: state.toastMsg,
  flowerParts: data.flower_parts,
  completedImgAlt: data.completedImgAlt,
  getLabels: state.getLabels,
});

const mapDispatch = (dispatch) => ({
  dropItem: (item) => {
    dispatch(thunks.checkDrop(item));
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
