import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    observationMotive: data.observationMotive,
    toastMsg: state.toastMsg,
    resetPopupText: data.resetPopupText,
    startUpInfoText: data.startUpInfoText,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    infoText: data.infoText[state.currentScreen],
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
