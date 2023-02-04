import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data/index";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    question: data.mainScreenMCQ[state.toggleQuestion].questionText,
    buttonText: data.submitAnswer,
    disabled: !state.selectedOption || state.correctAnswer,
    headingLevel: "2",
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
