import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { thunk } from "../actions/activity";

const mapState = (state) => {
  return {
    helpInfoContent: data.infoContent,
    resetPopupText: data.resetPopupText,
    correctAttempt: state.correctAttempt,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    initialPopupContent: data.initialPopupContent,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(thunk.onActivityStart());
  },
});

export default connect(mapState, mapDispatch)(Activity);
