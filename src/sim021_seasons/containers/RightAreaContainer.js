import { connect } from "react-redux";
import RightArea from "../components/activity/Right";

import data from "../data";

const mapState = (state) => ({
  showMCQ: state.showMCQ,
  correctAttempt: state.correctAnswer,
  answerAttempted: state.answerAttempted,
  selectedQuestion: state.selectedQuestion,
  showMCQCommonText: state.showMCQCommonText,
  commonTextForMCQScreen:
    state.selectedQuestion <= 8
      ? data.commonTextForMCQScreen1
      : data.commonTextForMCQScreen2,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightArea);
