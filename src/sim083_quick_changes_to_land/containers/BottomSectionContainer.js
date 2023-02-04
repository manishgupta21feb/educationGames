import { connect } from "react-redux";
import BottomSection from "../components/BottomSection";

const mapState = (state) => {
  const check = state.questionData.options2.length === 0;

  return {
    start: state.startSimulation,
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
    check: check,
    questionData: state.questionData,
    atStart: state.questionData.questionText1 == "",
    atEnd: state.questionData.questionText2 == ".",
    section: state.toggleQuestion,
  };
};

export default connect(mapState)(BottomSection);
