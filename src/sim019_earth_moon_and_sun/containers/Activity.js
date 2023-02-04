import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    activityHeading: data.activityHeading,
    infoDialogMessage: data.infoDialogMessage,
    isPopupActive: !!state.currentPopup.length,
    resetDialogMessage: data.resetDialogMessage,
    initialDialogMessage: data.initialDialogMessage,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
