import { connect } from "react-redux";
import BottomInteractive from "../components/BottomSection/BottomInteractive";

const mapState = (state) => ({
  correctAttempt: state.correctAnswer,
  answerAttempted: state.answerAttempted,
});

export default connect(mapState)(BottomInteractive);
