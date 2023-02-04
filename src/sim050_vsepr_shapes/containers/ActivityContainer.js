import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => {
  return {
    isSimulationStart: state.startSimulation,
    isActivityFinish: state.activityFinish,
    data: data,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,

    toastMessageType: state.toastMessageType,
    nextBtn: state.showNextBtn,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(thunk.setQuestion());
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Root);
