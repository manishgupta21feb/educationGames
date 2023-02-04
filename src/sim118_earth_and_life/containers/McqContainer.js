import { connect } from "react-redux";
import MCQArea from "../components/MCQArea";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    headingLevel: "3",
    heading: `${data.questionText.text1} ${state.getQuestionNumber + 1} ${
      data.questionText.text2
    } ${data.questions.length}`,
    question: data.questions[state.getQuestionNumber].question,
    questionLabel: data.questions[state.getQuestionNumber].questionLabel,
    buttonText: data.buttonLabels.submitAnswer,

    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    disabled: !state.getSubmitBtnVisibility,
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
