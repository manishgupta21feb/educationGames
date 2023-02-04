import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    toastMsg: state.toastMsg,
    simulationEnd: state.simulationEnd,
    infoDialogBoxText: data.infoPopupText,
    instructionText: data.instructionText,
    resetDialogBoxText: data.resetPopupText,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startUpDialogBoxText: data.startupInfoMessage,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  fetchElements: () => {
    dispatch(thunks.fetchElements());
  },
});

export default connect(mapState, mapDispatch)(Activity);
