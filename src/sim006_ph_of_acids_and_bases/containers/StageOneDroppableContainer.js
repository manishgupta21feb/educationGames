import { connect } from "react-redux";
import StageOneDroppable from "../components/StageOneDroppable";

import data from "../data";

const mapState = (state) => {
  const selectedStage = state.selectedStage;
  return {
    data: data[selectedStage],
    dropElement: state.dropElement,
    isPopupActive: !!state.currentPopup.length,
    accessibleListVisible: state.accessibleListVisible,
  };
};

export default connect(mapState)(StageOneDroppable);
