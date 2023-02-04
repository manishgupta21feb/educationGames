import { connect } from "react-redux";
import Question from "../components/activity/QuestionComponent";

import data from "../data/index";
import { thunks } from "../actions";

const mapStateToProps = (state) => {
  return {
    data: data,
    answerOptions: data.answerOptions,
    correctAttempt: state.submittedAnswer,
    answerSubmitted: state.answerSubmitted,
    questionCount: state.questionCount,
    selectedQuestion: state.selectedQuestion,
    question: state.selectedQuestion.answerOptions || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => {
    dispatch(thunks.submitAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
