import { connect } from "react-redux";
import DragBox from "../components/DragBox";

import data from "../data";

const mapState = (state) => {
  return {
    elements: data.elements,
    dropElement: state.dropElement,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(DragBox);
