import { connect } from "react-redux";
import DragBox from "../components/DragBox";

const mapState = (state) => {
  return {
    dropElement: state.dropElement,
    matchedItems: state.matchedItems,
    selectedStage: state.selectedStage,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(DragBox);
