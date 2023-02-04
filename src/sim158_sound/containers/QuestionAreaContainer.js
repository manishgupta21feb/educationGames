import { connect } from "react-redux";
import QuestionArea from "../components/MCQArea/QuestionArea";

import data from "../data";
import { selectQuestion } from "../actions";

const mapState = (state) => {
  const activeHotspot = state.hotspots.filter(
    (a) => a.id == state.selectedHotspot
  )[0];
  return {
    selectedQuestion:
      activeHotspot.question[state.questionNumberReducer].questionText,
    answerOptions: data.answerOptions,
    correctAttempt: state.submittedAnswer,
    answerSubmitted: state.answerSubmitted,
    questionIndex: state.selectQuestionIndex,
    videoAlt: data.hotspots[state.questionIndexReducer].details.alt,
  };
};
const mapDispatch = (dispatch) => ({
  setQuestion: (value) => {
    dispatch(selectQuestion(value));
  },
});

export default connect(mapState, mapDispatch)(QuestionArea);
