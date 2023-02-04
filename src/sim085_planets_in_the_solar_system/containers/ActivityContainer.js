import Activity from "../components/activity";
import { connect } from "react-redux";

import { common, thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    data: data,
    partiallyCorrect: state.partiallyCorrect,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    wrongAnswer: state.wrongAnswer,
    showToastMessage: state.showToastMessage,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.onSetClueData());
  },
});

export default connect(mapState, mapDispatch)(Activity);
