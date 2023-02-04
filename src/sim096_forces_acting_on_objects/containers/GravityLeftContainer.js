import GravityLeft from "../components/sections/gravity/leftSection";
import { connect } from "react-redux";

import simData from "../data";
import { thunks, setVideoEnded, setRunningTest } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    currentBall: state.getCurrentBall,
    sectionData: simData[state.getCurrentSection].balls,
    baseImgData:
      simData[state.getCurrentSection].baseImgData[state.getCurrentBall],
    runningTest: state.getRunningTest,
    testButton: simData.buttonContent.test,
    videoCompleted: state.getVideoEnded,
    ballsData: state.getBallsData,
    timerContent: simData.gravity.timerAria,
    poleData: simData.poleData,
  };
};

const mapDispatch = (dispatch) => ({
  videoEnded: () => {
    dispatch(setVideoEnded(true));
    dispatch(setRunningTest(false));
  },
  startTest: () => {
    dispatch(setRunningTest(true));

    EventManager.broadcast("SECONDARY_CLICK");
  },
  runAriaLive: () => {
    dispatch(thunks.setGravityLiveText());
  },
});

export default connect(mapState, mapDispatch)(GravityLeft);
