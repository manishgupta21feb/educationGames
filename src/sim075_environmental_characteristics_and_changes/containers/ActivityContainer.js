import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    startUpInfoText: data.startUpInfoText,
    activityheading: data.activityheading,
    resetPopupText: data.resetPopupText,
    infoText: data.screens["screen"+state.currentScreen].infoText,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
