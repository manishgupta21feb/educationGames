import { connect } from "react-redux";
import SecondScreen from "../components/activity/SecondScreen";

const mapState = (state) => {
  return {
    
    answerAttempt: state.submitAnswer,
    submitButtonPressed: state.submitButtonPressed,
  };
};

export default connect(mapState)(SecondScreen);
