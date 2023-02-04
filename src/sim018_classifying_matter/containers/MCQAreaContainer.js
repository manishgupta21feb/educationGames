import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunk } from "../actions/activity";

const mapState = (state) => {
  return {
    buttonText: data.submitAnswer,
    question: data.mcqQuestionText,
    disabled: !state.selectedOption || state.correctAnswer,
    heading: data.questionHeading.replace("-1-", state.selectedQuestion),
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => {
  return {
    onClick: () => {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(thunk.submitAnswer());
    },
  };
};

export default connect(mapState, mapDispatch)(MCQArea);
