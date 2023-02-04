import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  headingLevel: "2",
  heading: data.mcqQuestionHeading
    .replace("-1-", data.screen2MCQs.length - state.mcqQuestions.length)
    .replace("-2-", data.screen2MCQs.length),
  buttonText: data.submitAnswer,
  question: state.selectedMCQQuestion?.text,
  disabled:
    state.questionAnswered ||
    !state.mcqAnswerOption ||
    !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.submitMCQAnswer());
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
