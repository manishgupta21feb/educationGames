import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data/index";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    buttonText: data.submitAnswer,
    question: data.QuestionData[state.questionCount].questionText,
    disabled: !state.selectedOption || state.correctAnswer,
    headingLevel: "2",
    heading: data.questionHeading.replace("-1-", state.questionCount + 1),
    isPopupActive: !!state.currentPopup.length,
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
