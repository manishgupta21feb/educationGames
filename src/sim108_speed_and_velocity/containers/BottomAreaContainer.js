import { connect } from "react-redux";
import BottomArea from "../components/activity/BottomArea/BottomArea";
import data from "../data";
const mapState = (state) => {
  return {
    scenarioHeading: data.mcqScreenoneData[state.selectedQuestion].heading,
    questionScenario: data.mcqScreenoneData[state.selectedQuestion].id,
    questionId:
      data.mcqScreenoneData[state.selectedQuestion].questionData[state.setMcq]
        .id,
    mcqView: state.mcqShow,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
  };
};

export default connect(mapState)(BottomArea);
