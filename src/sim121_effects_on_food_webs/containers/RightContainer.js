import { connect } from "react-redux";

import RightArea from "../components/ViewArea/RightArea";

import data from "../data";
const mapState = (state) => {
  
  return {
    screenIntro: state.secondScreen
      ? data.headingScreen2
      : data.mcqHeadingScreen1,
    mcqShow: state.mcqShow,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    secondScreen: state.secondScreen,
    chartShow: state.updatedChart,
    chartHeading:data.chartHeading[state.setQuestionValue]
  };
};

export default connect(mapState)(RightArea);
