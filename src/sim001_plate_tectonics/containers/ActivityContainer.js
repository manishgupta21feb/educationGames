import Root from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import TextData from "../config/index";

const mapState = (state) => {
  return {
    toastMsg: state.toastMsg,
    informationText: TextData.infoText,
    completionText: state.setFinalDialogMsg,
    resetDialogText: TextData.resetPopupText,
    startDialogBox: TextData.startScreenInfo,
    showToastMessage: state.showToastMessage,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Root);
