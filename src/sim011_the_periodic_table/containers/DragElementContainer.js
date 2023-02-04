import { connect } from "react-redux";
import DragElement from "../components/activity/DragElement";

import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    elementDescriptionAltText: data.elementDescription,
  };
};

export default connect(mapState)(DragElement);
