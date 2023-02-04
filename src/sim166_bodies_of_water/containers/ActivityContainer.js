import Activity from "../components/activity";
import { connect } from "react-redux";

import { common, setScreen } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    data,
    screenNumber: state.screenNumber,
    showToastMessage: state.showToastMessage,
    toastMsg: state.toastMsg,
    introPopupLabels: data.introPopupLabels,
    introImageAlt: data.introImageAlt,
    headingLevelOne: data.activityHeading,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
