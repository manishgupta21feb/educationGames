import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    infoBoxText: data.infoBoxText,
    resetPopupText: data.resetPopupText,
    startPopupText: data.startPopupText,
    activityHeading: data.activityHeading,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
