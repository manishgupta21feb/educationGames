import { connect } from "react-redux";
import Activity from "../components/activity";

import { common, thunks } from "../actions";

import data from "../data";

const mapState = (state) => {
  return {
    helpPopupText: data.helpPopupText,
    resetPopupText: data.resetPopupText,
    activityHeading: data.activityHeading,
    isPopupActive: !!state.currentPopup.length,
    initialInfoPopupText: data.initialInfoPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onMount: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.activityLoaded());
    dispatch(common.updateResetBtnState(true));
  },
});

export default connect(mapState, mapDispatch)(Activity);
