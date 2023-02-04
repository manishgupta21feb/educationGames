import { connect } from "react-redux";
import BottomInteractive from "../components/BottomSection/BottomInteractive.js";
import data from "../data/index";

const mapState = (state) => ({
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
    mainHeading: data.investigatingData[state.investigatingQuestionId].mainHeading
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomInteractive);