import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  const heading = data.mcqQuestionHeading
    .replace("count", state.questionCount)
    .replace("length", state.selectedQuestion.mcqQuestion.length);

  return {
    headingLevel: "2",
    heading: state.count,
    question:
      state.selectedQuestion.mcqQuestion[state.questionCount - 1].questionText,
    buttonText: data.buttonLabels.submitAnswer,
    heading,

    isPopupActive: !!state.currentPopup.length,
    disabled: !state.getSelectedOption || state.submittedAnswer,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.submitAnswerMCQ());
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
