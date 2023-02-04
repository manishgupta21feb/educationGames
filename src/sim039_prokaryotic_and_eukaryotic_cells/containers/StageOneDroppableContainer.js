import { connect } from "react-redux";
import StageOneDroppable from "../components/StageOneDroppable";
import data from "../data";

const mapState = (state) => {
  const selectedStage = state.selectedStage;
  return {
    isPopupActive: !!state.currentPopup.length,
    data: data[selectedStage],
    dropElement: state.dropElement,
    accessibleListVisible: state.accessibleListVisible,
    matchedItems: state.matchedItems,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(StageOneDroppable);
