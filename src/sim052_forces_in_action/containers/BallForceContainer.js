import { connect } from "react-redux";
import BallForce from "../components/BallForce";
import EventManager from "../../app/events/manager";

import { thunk, setVideoEnded } from "../actions";

const mapState = (state) => {
  const data = state.getData;
  return {
    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    viewData: data.view[1].data,
    nextButtonLabel: data.buttonLabels.next,
    continueButtonLabel: data.buttonLabels.continue,
    baseImage: data.ballForceImage[0],
    beginWar: state.getForceBegin,
    videoStatus: state.getVideoEnded,
  };
};

const mapDispatch = (dispatch) => ({
  updateWarForce: () => {
    dispatch(thunk.resetBallForceWar());
    EventManager.broadcast("SECONDARY_CLICK");
  },
  exitActivityHandler: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.exitHandler());
  },
  videoEnded: () => {
    dispatch(setVideoEnded(true));
  },
});

export default connect(mapState, mapDispatch)(BallForce);
