import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data";
import { thunks, common, simulationEnd } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    toastMsg: state.toastMsg,
    StartUpInfoText: data.StartUpInfo.instructionBoxContent,
    instructionInfoText: data.header.instructionBoxContent,
    playInstructionText: data.playInstructionText,
    resetDialogText: data.resetPopupText,
    elementData: state.elementData,
    updateAttemptData: state.updateAttempt,
    dropElement: state.dropElement,
    simulationEnd: state.simulationEnd,
    resetBtnState: state.resetBtnState,
    showToastMessage: state.showToastMessage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onInCorrectDrop: (currentOption) => {
    dispatch(thunks.onInCorrectDrop(currentOption));
  },
  onCorrectDrop: (currentOption) => {
    dispatch(thunks.onCorrectDrop(currentOption));
  },
  updateAttempt: (val) => {
    dispatch(thunks.updateAttempt(val));
  },
  updateSimulationEnd: (val) => {
    dispatch(simulationEnd(val));
  },
  updateResetBtnState: (val) => {
    dispatch(common.updateResetBtnState(val));
  },
  onActivityInit: () => {
    dispatch(thunks.onActivityInit());
  },
  toggleToastMessage: (val) => {
    dispatch(common.toggleToastMessage(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
