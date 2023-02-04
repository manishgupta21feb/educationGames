import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  const heading = data.questionHeading.replace("-1-", state.questionCount);

  return {
    heading,
    headingLevel: "2",
    buttonText: data.buttonLabels.submitAnswer,
    question: data.reactionTypeQuestion,
    isPopupActive: !!state.currentPopup.length,
    disabled:
      !state.selectedLonePairAnswerOption ||
      !state.selectedShapeAnswerOption ||
      state.showNextBtn,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.submitAnswer());
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
