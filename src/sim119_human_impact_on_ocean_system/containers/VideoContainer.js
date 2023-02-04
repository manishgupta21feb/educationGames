import Video from '../../app/components/Video';
import { connect } from "react-redux";
import data from '../data';
import { 
  isVideoEnded, 
  setVideoState, 
  toggleVideoState,
  thunks 
} from '../actions';

const mapState = (state) => {

  const videoData = (state.selectedHotspot == 1) ? data.videoData[0] : data.videoData[1];

  return {
    currentPopup: state.currentPopup,
    autoPlay: true,
    loop: false,
    question: videoData,
    buttonLabels: data.buttonLabels
  }
};

const mapDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(isVideoEnded(false));
  },
  playStateToggled: (state) => {
    dispatch(toggleVideoState());
    dispatch(thunks.setVideoLiveText());
  },
  canPlayThrough: () => {
    dispatch(setVideoState(true));
    dispatch(thunks.setVideoLiveText());
  },
});

export default connect(mapState, mapDispatch)(Video);
