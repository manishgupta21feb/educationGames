import { connect } from "react-redux";
import McqScreen from "../components/McqScreen";
import data from "../data";
const mapState = (state) => {
  return {
    heading: data.mcqScreenHeading,
    answerAttempt: state.submitAnswer,
    submitButtonPressed: state.submitButtonPressed,
  };
};
export default connect(mapState)(McqScreen);
