import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const heading = data.questionHeading.replace("-1-", state.questionCount);
  const disabled =
    state.currentPopup.length ||
    !state.selectAnswerOption ||
    (state.answerSubmitted && state.submittedAnswer);
  return {
    heading,
    disabled: disabled,
    question: data.reactionTypeQuestion,
    uniqueId: "nuclear-chemistry-question",
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
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
