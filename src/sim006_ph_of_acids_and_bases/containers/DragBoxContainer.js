import { connect } from "react-redux";
import DragBox from "../components/DragBox";

const mapState = (state) => {
  return {
    dropElement: state.dropElement,
    selectedStage: state.selectedStage,
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(DragBox);
