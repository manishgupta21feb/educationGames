import { connect } from "react-redux";
import Video from "../../app/components/Video";
import data from "../data";
import {videoEnded,thunks,setVideoState} from "../actions"
const mapState = (state) => {
    const activeHotspot = state.hotspots.find(
        (a) =>a.id==state.selectedHotspot);
        //console.log("activeHotspot",activeHotspot)
  return {
    currentPopup: state.currentPopup,
    autoPlay: true,
    loop: false,
    buttonLabels: data.buttonLabels,
    question:{
      id: activeHotspot.details.id,
      videoSrc: activeHotspot.details.videoSrc,
      alt:state.isVideoEnded?activeHotspot.details.videoEndLiveText:activeHotspot.details.videoStartLiveText
    },
  };
};
const mapDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(videoEnded(true));
  },
  playStateToggled: (state) => {
    dispatch(thunks.setVideoLiveText());  
  },
  canPlayThrough: () => {
    dispatch(setVideoState(true));
  },
});

export default connect(mapState, mapDispatch)(Video);
