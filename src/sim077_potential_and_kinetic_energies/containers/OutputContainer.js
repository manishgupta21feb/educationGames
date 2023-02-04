import { connect } from "react-redux";
import VideoOutput from "../components/Screens/ScreenOne/VideoOutput";
import data from "../data";
import { thunks,videoEnded ,setVideoState} from "../actions";
const mapState = (state) => {
  // const activeHotspot = state.hotspots.filter(
  //   (a) =>   state.selectedHotspot &&
  //   state.selectedHotspot.length &&
  //   a.id==state.selectedHotspot)[0];
  return {
    isPopupActive: !!state.currentPopup.length,
    isVideoVisible: state.isVideoVisible,
    isVideoEnded:state.isVideoEnded,
    btnText:data.buttonLabels.continue,
    btnDisabled:!state.isVideoEnded,
    currentPopup: state.currentPopup,
    buttonLabels: data.buttonLabels,
    hotspots:state.hotspots,
    selectedHotspot:state.selectedHotspot,

  };
};

const mapDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(videoEnded(true));
  },
  playStateToggled: (state) => {
    dispatch(thunks.setVideoLiveText());  
  },
  continuePressed:()=>{
    dispatch(thunks.videoContinuePressed())
  },
  canPlayThrough: () => {
    dispatch(setVideoState(true));
  },
});

export default connect(mapState, mapDispatch)(VideoOutput);
