import GravityRight from "../components/sections/gravity/rightSection";
import { connect } from "react-redux";

import simData from "../data";
import {
  setBallsData,
  setCurrentBall,
  setVideoEnded,
  thunks,
  common,
} from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    sectionContent: simData[state.getCurrentSection].content,
    ballsData: state.getBallsData,
    nextButton: simData.buttonLabels.next,
    videoEnded: state.getVideoEnded,
    currentBall: state.getCurrentBall,
    runningTest: state.getRunningTest,
  };
};

const mapDispatch = (dispatch) => ({
  onUpdateBallsData: (data, index) => {
    dispatch(setCurrentBall(index));
    dispatch(setBallsData(data));
    dispatch(setVideoEnded(false));
    dispatch(common.setResetFocusState(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onBallsUpdate: (data) => {
    dispatch(setBallsData(data));
    // dispatch(setVideoEnded(false));
  },
  resetActivity: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(GravityRight);
