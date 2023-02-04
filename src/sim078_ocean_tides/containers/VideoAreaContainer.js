import { connect } from "react-redux";

import data from "../data";
import { setViewVideo, thunks, setNextBtn } from "../actions";
import VideoArea from "../components/SecondScreeen/VideoArea";
import * as actions from "../../app/actions";

export const common = { ...actions };

const mapState = (state) => {
  return {
  
    setViewVideo: state.setViewVideo,
    buttonLabels: data.buttonLabelsData,
    currentPopup: state.currentPopup,
    observationsData: state.observationsData,
    currentExperimentNumber: state.currentExperimentNumber,
    buttonPlay: data.buttonPlay,
  };
};

const mapDispatch = (dispatch) => ({
  handleNextButtonClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    EventManager.broadcast("COMPLETION_SCREEN");
  },
  onClick: (liveText) => {
    dispatch(common.ariaLiveText(liveText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
  onVideoEnd: () => {
    dispatch(setNextBtn(false));
  },
});

export default connect(mapState, mapDispatch)(VideoArea);
