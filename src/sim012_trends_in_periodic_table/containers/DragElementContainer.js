import { connect } from "react-redux";
import DragElement from "../components/activity/DragElement";

import data from "../data";

const mapState = (state) => {
  return {
    elementDescriptionAltText: data.elementDescription,
    selectedQuestion: state.selectedQuestion,
    showAnimation: state.showAnimation,
    droppedItems: state.droppedItems,
    popupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(DragElement);
