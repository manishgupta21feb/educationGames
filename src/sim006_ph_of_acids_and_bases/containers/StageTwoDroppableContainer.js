import { connect } from "react-redux";
import StageTwoDroppable from "../components/StageTwoDroppable";

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

export default connect(mapState)(StageTwoDroppable);
