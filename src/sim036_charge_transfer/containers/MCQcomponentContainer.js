import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  const heading = data.questionHeading
    .replace("-1-", state.questionCount)
    .replace("-2-", data.equationsData.length);

  return {
    heading,
    buttonText: data.buttonLabels.submitAnswer,
    question: data.reactionTypeQuestion,
    isPopupActive: !!state.currentPopup.length,
    disabled:
      state.currentPopup.length ||
      !state.selectedAnswerOption ||
      (state.submitAnswer && state.submitButtonPressed),
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.submitAnswer());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
