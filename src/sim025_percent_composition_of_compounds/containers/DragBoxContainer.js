import { connect } from "react-redux";
import DragBox from "../components/DragBox";
import { setShowDropZone } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    elements: state.elementData,
    dropElement: state.dropElement,
    isPopupActive: !!state.currentPopup.length,
    showDropZone: state.showDropZone,
  };
};

const mapDispatch = (dispatch) => ({
  setShowDropZone: (val) => {
    dispatch(setShowDropZone(val));
  },
});

export default connect(mapState, mapDispatch)(DragBox);
