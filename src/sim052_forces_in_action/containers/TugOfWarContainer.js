import TugOfWars from "../components/TugOfWar";
import { connect } from "react-redux";

import { setCurrentVideo, thunk } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  const data = state.getData;
  return {
    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    totalStrength: state.getTotalStrength,
    activityImages: data.TugOfWarImages,
    viewData: data.view[0].data,
    labelData: data.view[0].teamLabel,
    startWar: state.getForceBegin,
    continueButtonLabel: data.buttonLabels.continue,
    nextButtonLabel: data.buttonLabels.next,
    videoEnded: state.getVideoEnded,
  };
};

const mapDispatch = (dispatch) => ({
  setWarVideo: (data) => {
    dispatch(setCurrentVideo(data));
  },
  exitActivityHandler: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.exitHandler());
  },
  resetTugOfWar: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetTugWar());
  },
  onVideoEnded: () => {
    dispatch(thunk.tugOfWarPopupReset());
  },
});

export default connect(mapState, mapDispatch)(TugOfWars);
