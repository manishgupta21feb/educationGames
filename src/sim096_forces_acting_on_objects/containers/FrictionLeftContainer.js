import { connect } from "react-redux";
import FrictionLeft from "../components/sections/friction/leftSection";

import simData from "../data";
import {
  common,
  thunks,
  setVideoEnded,
  setCurrentLevel,
  setTestCompleted,
} from "../actions";

const mapState = (state) => {
  const currentBaseImage = simData[state.getCurrentSection].baseImgData;

  return {
    isPopupActive: !!state.currentPopup.length,
    isActivityRunning: state.getRunningTest,
    conclusion:
      state.getCurrentLevel > 0
        ? simData[state.getCurrentSection][state.getCurrentFriction][
            state.getCurrentLevel
          ].conclusion
        : "",
    isTestCompleted: state.getTestCompleted,
    currentVideoCount: state.getCurrentLevel,
    baseImgData: currentBaseImage.baseImage,
    testButton: simData.buttonContent.test,
    closeButton: simData.buttonLabels.close,
    frictionTest: state.getFrictionTest,
    videoCompletedF: state.getVideoEnded,
    currentExperiment: state.getCurrentFriction,
    videoId:
      state.getCurrentFriction == ""
        ? "frictionHolder"
        : simData[state.getCurrentSection][state.getCurrentFriction][
            state.getCurrentLevel
          ].id,
  };
};

const mapDispatch = (dispatch) => ({
  updateVideoCount: () => {
    dispatch(setCurrentLevel(1));
    dispatch(setVideoEnded(false));

    dispatch(common.setResetFocusState(false));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.setResetFocusState(true));
  },
  runAriaLive: () => {
    dispatch(thunks.setFrictionLiveText());
  },
  testCompleted: () => {
    dispatch(setTestCompleted(true));
    dispatch(thunks.frictionUpdate());
  },
  videoFinished: () => {
    dispatch(setVideoEnded(true));
    dispatch(thunks.frictionTestLive());
  },
  resetExperiement: () => {
    dispatch(thunks.resetExperiment1());
    EventManager.broadcast("SECONDARY_CLICK");
  },
  resetFocus: () => {
    //  dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(FrictionLeft);
