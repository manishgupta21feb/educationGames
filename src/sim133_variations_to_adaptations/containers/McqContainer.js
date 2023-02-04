import { connect } from "react-redux";
import MCQArea from "../components/MCQArea";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  const screen = state.screen;
  const heading = data.questionHeading
    .replace("-1-", state.getQuestionNumber + 1)
    .replace("-2-", "3");

  return {
    headingLevel: "2",
    heading,
    question:
      screen === "first"
        ? { ...data[state.currentLocation] }.question
        : data.questions[state.getQuestionNumber].question,
    imgSrc: { ...data[state.currentLocation] }.imgSrc,
    imageAlt: { ...data[state.currentLocation] }.imageAlt,
    firstScreenQuestionsId: { ...data[state.currentLocation] }.id,
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    disabled: !state.getSubmitBtnVisibility,
    screen,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.onSubmitAnswer());
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
