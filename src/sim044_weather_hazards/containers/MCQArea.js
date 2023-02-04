import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunk, common } from "../actions/activity";

const mapState = (state) => {
  const heading = data.questionHeading.replace("1", state.questionCount);
  // .replace("-2-", data.questionsData.length);
  return {
    buttonText: data.submitAnswer,
    question: state.questionsData[state.questionCount - 1].label,
    image: data.image,
    isPopupActive: !!state.currentPopup.length,
    disabled:
      state.currentPopup.length ||
      !state.selectedAnswerOption ||
      (state.submitAnswer && state.submitButtonPressed),
    headingTop: data.questionHeading2,
    heading,
    headingLevel: "2",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.submitAnswer());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
