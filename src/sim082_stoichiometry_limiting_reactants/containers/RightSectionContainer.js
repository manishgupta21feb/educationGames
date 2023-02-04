import { connect } from "react-redux";
import RightSection from '../components/RightSection';
import data from "../data";

const mapState = (state) => ({
  instructionText: data.instructionText,
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightSection);
