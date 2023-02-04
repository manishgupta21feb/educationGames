import { connect } from "react-redux";
import AnimationArea from "../components/activity/AnimationArea";

import data from "../data";

const mapStateToProps = (state) => {
  return {
    question: state.selectedQuestion,
    submitAnswer: state.submitAnswer,
    firstFrameImage: data.firstFrameImage,
    questionCount: state.questionCount,
    data: data,
    pauseVideo: state.pauseVideo,
    currentPopup: state.currentPopup,
    startSimulation: state.startSimulation,
  };
};

export default connect(mapStateToProps)(AnimationArea);
