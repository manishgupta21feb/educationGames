import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common, thunks, simulationEnd } from "../actions";

const mapState = (state) => {
  const selectedStage = state.selectedStage;
  return {
    data: data[selectedStage],
    toastMsg: state.toastMsg,
    simulationEnd: state.simulationEnd,
    infoDialogBoxText: data.infoMessage,
    resetDialogBoxText: data.resetPopup,
    showToastMessage: state.showToastMessage,
    startUpDialogBoxText: data.startupMessage,
    isPopupActive: !!state.currentPopup.length,
    instructionText: data[selectedStage].instructionText,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  fetchElements: () => {
    dispatch(thunks.fetchElements());
  },
  updateSimulationEnd: (val) => {
    dispatch(simulationEnd(val));
  },
});

export default connect(mapState, mapDispatch)(Activity);
