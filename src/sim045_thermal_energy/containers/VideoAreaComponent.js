import { connect } from "react-redux";
import VideoAreaComponent from "../components/activity/observationsScreen/VideoAreaComponent";

import data from "../data";
import { isVideoPlay, isVideoEnd, altTextChange } from "../actions";
import * as actions from "../../app/actions";

export const common = { ...actions };

const mapStateToProps = (state) => ({
  videoStopText: data.videoStop,
  videoPlayText: data.buttonLabels.playVideo,
  isToggleScreen: state.isToggleScreen,
  currentPopup: state.currentPopup,
  questionsData: state.questionsData,
  observationsData: state.observationsData,
  currentExperimentNumber: state.currentExperimentNumber,
  buttonLabels: data.buttonLabels,
  readingMeters: data.readingMeters,
  animationInfo: data.animationInfo,
  thermometer: data.thermometer,
  redArrow: data.redArrow,
});

const mapDispatchToProps = (dispatch) => ({
  setSoundOnClick: () => {
    EventManager.broadcast("AUDIO_STARTPRIMARY_CLICK");
  },
  altTextChange: (item) => {
    // dispatch(altTextChange(item));
  },
  isVideoPlay: (data, liveText) => {
    dispatch(isVideoPlay(data));
    dispatch(common.ariaLiveText(liveText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
  isVideoEnd: (data) => {
    dispatch(isVideoEnd(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(VideoAreaComponent);
