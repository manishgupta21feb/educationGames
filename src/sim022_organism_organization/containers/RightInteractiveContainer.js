import { connect } from "react-redux";
import RightInteractive from "../components/RightArea/RightInteractive";
import data from "../data";

const mapState = (state) => ({
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer,
  heading: data.mcqInfotext,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightInteractive);
