import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common, thunks, simulationEnd } from "../actions";

const mapState = (state) => {
  const selectedStage = state.selectedStage;
  return {
    toastMsg: state.toastMsg,
    data: data[selectedStage],
    simulationEnd: state.simulationEnd,
    infoDialogBoxText: data.info.content,
    resetDialogBoxText: data.reset.content,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    startUpDialogBoxText: data.StartUpInfo.content,
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
