import { connect } from "react-redux";
import VideoOutput from "../components/Screens/ScreenOne/VideoOutput";
import data from "../data";
import { thunks } from "../actions";
const mapState = (state) => {
  const activeHotspot = state.hotspots.filter(
    (a) =>   state.selectedHotspot &&
    state.selectedHotspot.length &&
    a.id==state.selectedHotspot)[0];
  return {
    isPopupActive: !!state.currentPopup.length,
    isVideoVisible: state.isVideoVisible,
    activeHotspot:activeHotspot,
    isVideoEnded:state.isVideoEnded,
    btnText:state.selectQuestionIndex == 4 ? data.buttonLabels.finish : data.buttonLabels.continue,
    btnDisabled:!state.isVideoEnded,
    labelling:data.labelling,
    submittedAnswer: state.submittedAnswer
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.videoContinuePressed())
  },
});

export default connect(mapState, mapDispatch)(VideoOutput);
