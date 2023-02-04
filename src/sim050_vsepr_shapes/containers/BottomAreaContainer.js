import { connect } from "react-redux";
import BottomArea from "../components/activity/BottomArea/BottomArea.js";

import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    showNextBtn: state.showNextBtn,
    answerAttempt: state.submitAnswer,
  };
};

export default connect(mapState)(BottomArea);
