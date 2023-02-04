import { connect } from "react-redux";
import AnimationArea from "../components/activity/AnimationArea";

import data from "../data";

const mapStateToProps = (state) => {
  data.videoStopText = data.buttonLabels.pauseVideo;
  data.videoPlayText = data.buttonLabels.playVideo;
  return {
    data: data,
    pauseVideo: state.pauseVideo,
    submitAnswer: state.submitAnswer,
    question: state.selectedQuestion,
    currentPopup: state.currentPopup,
    questionCount: state.questionCount,
    firstFrameImage: data.firstFrameImage,
    startSimulation: state.startSimulation,
  };
};

const mapDispatchToPRops = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToPRops)(AnimationArea);
