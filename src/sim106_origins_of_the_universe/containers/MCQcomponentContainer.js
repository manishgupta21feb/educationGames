import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  let flag = true;
  if (state.getSelectedOption.length > 0 && !state.getIsAnswerCorrect) {
    flag = false;
  } else if (state.getIsAnswerCorrect == true) {
    flag = state.getIsAnswerCorrect;
  }
  return {
    //----> From Data
    heading: " ",
    question: data.view[0].questions[state.getQuestionNumber].question,
    buttonText: data.buttonLabels.submitAnswer,
    disabled: flag,

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
