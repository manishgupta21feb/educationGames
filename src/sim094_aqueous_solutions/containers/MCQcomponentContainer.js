import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    headingLevel: "2",
    question: data.questions[state.getQuestionNumber].question,
    questionLabel: data.questions[state.getQuestionNumber].questionLabel,
    buttonText: data.buttonLabels.submitAnswer,

    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    disabled: !state.getSubmitBtnVisibility
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
