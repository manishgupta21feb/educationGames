import { connect } from "react-redux";
import BottomArea from "../components/activity/BottomArea";

const mapState = (state) => {
  return {
    
    answerAttempt: state.submitAnswer,
    submitButtonPressed: state.submitButtonPressed,
  };
};

export default connect(mapState)(BottomArea);
