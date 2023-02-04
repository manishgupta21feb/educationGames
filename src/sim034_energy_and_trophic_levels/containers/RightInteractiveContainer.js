import { connect } from "react-redux";
import RightInteractive from "../components/RightArea/RightInteractive";
import data from "../data";

const mapState = (state) => ({
  selectedQuestion: state.selectedQuestion,
  question: data.mcqData
    .filter((q) => q.id == state.selectedQuestion)
    .map((q) => {
      {
        q.ques;
      }
    }),
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer,
});

export default connect(mapState)(RightInteractive);
