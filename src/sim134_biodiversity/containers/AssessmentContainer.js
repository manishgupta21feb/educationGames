import { connect } from "react-redux";
import Assessment from "../components/Question/";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => {
  const questionCount = state.getQuestionNumber;

  return {
    buttonLabels:
      questionCount == 3 ? data.buttonLabels.finish : data.buttonLabels.next,
    isAnswerSubmitted: state.getAnswer,
    countTotal: data.questions.length,
    questionNumber: questionCount,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    updateQuestionCount: () => {
      dispatch(thunk.onClickNext());
    },
    onSetReset: () => {
      dispatch(common.setResetFocusState(true));
    },
  };
};

export default connect(mapState, matchDispatch)(Assessment);
