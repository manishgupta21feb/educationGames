import { connect } from "react-redux";
import Video from "../../app/components/Video";
import data from "../data";
import {common, videoEnded,thunks} from "../actions"
const mapState = (state) => {
  return {
    currentPopup: state.currentPopup,
    autoPlay: true,
    loop:false,
    question:{
      ...data.animationAssest,
      alt:state.isVideoEnded?data.animationAssest.endAlt:data.animationAssest.startAlt
    },
    buttonLabels: data.buttonLabels,

  };
};
const mapDispatch=(dispatch)=>({
  onVideoEnded:()=>{
    dispatch(videoEnded(true))
   },
   playStateToggled: (state) => {
    dispatch(thunks.setVideoLiveText());  
  },
  })

export default connect(mapState,mapDispatch)(Video);
