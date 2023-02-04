import { connect } from "react-redux";
import RightInteractive from "../components/right/interactive";

const mapState = (state) => {
  return{
  answerAttempt: state.submitAnswer,
  submitButtonPressed: state.submitButtonPressed,
}};

export default connect(mapState)(RightInteractive);
