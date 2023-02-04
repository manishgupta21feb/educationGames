import { connect } from "react-redux";
import RightInteractive from "../components/RightArea/RightInteractive";

import data from "../data";

const mapState = (state) => ({
  question: data.mcqQuestionText,
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer,
});

export default connect(mapState)(RightInteractive);
