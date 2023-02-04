import { connect } from "react-redux";
import Video from "../components/activity/Video";
import { isVideoEnded } from "../actions";


import data from "../data";

const mapState = (state) => {
  return {
    autoPlay: true,
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
    question: state.questionsData[state.questionCount-1],
  };
};

  const matchDispatch = (dispatch) => ({
    onVideoEnded: () => {
      dispatch(isVideoEnded(true));
    },
  });



export default connect(mapState, matchDispatch)(Video);
