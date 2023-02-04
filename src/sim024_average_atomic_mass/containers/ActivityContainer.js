import Activity from "../components/activity";
import { connect } from "react-redux";

import { togglePopup } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    startUpInfoText: data.startUpInfoText,
    infoText: data.infoText,
    resetPopupText: data.resetPopupText
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
