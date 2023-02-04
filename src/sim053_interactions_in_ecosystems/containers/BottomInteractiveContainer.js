import { connect } from "react-redux";
import BottomInteractive from "../components/BottomSection/BottomInteractive.js";

const mapState = (state) => ({
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomInteractive);