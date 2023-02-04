import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data/index";
import { thunks } from "../actions";

const mapState = (state) => {
  const questions = data.mcqQuestions.map((m) => ({
    questions: m,
  }));
  const mainScreenQuestions = data.mainScreenMCQ
    .filter((q) => q.id == state.selectedHotspot)
    .map((m) => ({
      questions: m.questionText,
    }));

  return {
    question: state.selectedHotspot
      ? mainScreenQuestions[state.selectedQuestionHeading].questions
      : state.mcqQuestion.questionText,
    buttonText: data.submitAnswer,
    disabled: !state.selectedOption || state.correctAnswer,
    heading: !state.selectedHotspot
      ? data.questionHeading.replace("-1-", state.questionCount)
      : null,
  };
};

const mapDispatch = (dispatch) => {
  return {
    onClick: () => {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(thunks.submitAnswer());
    },
  };
};

export default connect(mapState, mapDispatch)(MCQArea);
