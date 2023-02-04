import { connect } from "react-redux";
import QuestionArea from "../components/activity/MCQ/QuestionArea";

import data from "../data";
import { selectQuestion } from "../actions";

const mapState = (state) => ({
  selectedQuestion: state.selectedQuestion.questionText,
  answerOptions: data.answerOptions,
  correctAttempt: state.submittedAnswer,
  answerSubmitted: state.answerSubmitted,
  questionIndex: state.selectQuestionIndex,
});

const mapDispatch = (dispatch) => ({
  setQuestion: (value) => {
    dispatch(selectQuestion(value));
  },
});

export default connect(mapState, mapDispatch)(QuestionArea);
