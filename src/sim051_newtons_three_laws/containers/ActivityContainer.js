import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data, { screenData } from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    initialInfotext: data.initialInfotext,
    hintText: data.hintText,
    screenData: screenData,
    showToastMessage: state.showToastMessage,
    toastMsg: state.toastMsg,
    resetPopupText: data.resetPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
