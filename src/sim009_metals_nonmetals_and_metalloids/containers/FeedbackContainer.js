import { connect } from "react-redux";
import Feedback from "../components/Screens/Screen0/FullView/Feedback";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  feedbackData: state.feedback,
  text: data.buttonLabels.continue,
  videoPlayState: state.videoPlayState,
  videoStop: data.buttonLabels.playVideo,
  videoPlay: data.buttonLabels.pauseVideo,
  isPopupActive: !!state.currentPopup.length,
  buttonContinueClasses: "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  toggleVideoState: (videoPlayState) => {
    dispatch(thunks.toggleVideo(videoPlayState));
  },
  handleContinue: () => {
    dispatch(thunks.continuePress());
  },
});

export default connect(mapState, mapDispatch)(Feedback);
