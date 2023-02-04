import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const heading = data.questionHeading.replace("-1-", state.count);

  return {
    heading,
    headingLevel: "2",
    buttonText: data.buttonLabels.submitAnswer,
    question: state.currectQuestion.questionTxt,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.correctAnswer || !state.radioOption,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.submitAnswer());
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
