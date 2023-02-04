import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { common, isNextButtonEnable, thunks } from "../actions";

const mapState = (state) => {
  return {
    headingLevel: "2",
    data: data,

    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    setQuestion: state.setQuestion,
    question: data.commonQuestionOst,
    disabled: state.currentPopup.length || state.getSubmitEnabler,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: (e) => {
      dispatch(thunks.onClickSubmit(e));
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
