import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data/index";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    question: state.nextSection
      ? data.nextSectionData[state.questionCount].questionText
      : data.ecosystemScreen.questionHeading,
    buttonText: data.submitAnswer,
    disabled: !state.submitButton,
    headingLevel: "2",
    isPopupActive: !!state.currentPopup.length,
    heading: state.nextSection
      ? data.nextSectionData[state.questionCount].questionHeading
      : null,
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
