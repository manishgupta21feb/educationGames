import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const question = data.mcqHeading
  return{
    question,
    headingLevel: "2",
 
  buttonText: data.submitAnswer,
  disabled:
    state.correctAnswer ||
    !state.starPathwayOption ||
    !!state.currentPopup.length,
};
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.submitAnswer());
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
