import { connect } from "react-redux";
import BottomArea from "../components/RightView/RightMCQ.js";

const mapState = (state) => {
  return {
    answerAttempt: state.submitAnswerMcq,
    submitButtonPressed: state.submitButtonPressed,
    setStatic: state.setStatic,
  };
};

export default connect(mapState)(BottomArea);
