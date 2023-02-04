import { connect } from "react-redux";
import BottomInteractive from "../components/BottomSection/BottomInteractive";

const mapState = (state) => ({
  answerAttempted: state.answerAttempted,
  correctAnswer: state.correctAnswer
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomInteractive);
