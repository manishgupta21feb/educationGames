import { connect } from "react-redux";
import VideoAreaComponent from "../components/activity/Main/Video";
import data from "../data";
import { setIsVideoEnd } from "../actions/index";

const mapStateToProps = (state) => {
  let result 
   
  if (state.getIsVideoEnd) {
   result = {...state.questionsData[state.questionCount - 1], alt:state.questionsData[state.questionCount - 1].altAfterPlay}
  }
  else {
    result = {...state.questionsData[state.questionCount - 1]}

  }


  if (state.getIsVideoPause) {
    // videoDetails.videoSrc = "";
  }

  return {
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
    question: result, 
    disablePlayPauseButton: false,
    stepperValue: state.stepperValue,
    labels:   [
      data.labelhundread,
      data.labeleighty,
      data.labelsixty,
      data.labelforty,
      data.labeltwenty,
    ],
     
  };
};

const matchDispatch = (dispatch) => ({
  onVideoEnd: (val) => {
    dispatch(setIsVideoEnd(val));
  },
});
export default connect(mapStateToProps, matchDispatch)(VideoAreaComponent);
