import { connect } from "react-redux";
import Video from "../../app/components/Video";
import data from "../data";

const mapState = (state) => {
  const selectedQ = data.videos.filter( ( v ) => v.id == "poster"+state.selectedValue.value)[0]
  return {
    autoPlay: false,
    question:selectedQ,
    currentPopup: state.currentPopup,
    buttonLabels: data.buttonLabels,
    disablePlayPauseButton: true,
    togglePlayState: state.runState ? "play" : "stop"
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Video);
