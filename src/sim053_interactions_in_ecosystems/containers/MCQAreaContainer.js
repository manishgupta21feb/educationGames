import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import data from "../data/index";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    headingLevel: "2",
    question: state.questionText,
    buttonText: data.submitAnswer,
    disabled:
      state.correctAnswer ||
      !state.selectedOption ||
      !!state.currentPopup.length,
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
