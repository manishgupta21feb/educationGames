import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    headingLevel: "2",
    question: data.view[0].questions[state.getQuestionNumber].question,
    buttonText: data.buttonLabels.submitAnswer,

    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.submitAnswerHandler());
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
