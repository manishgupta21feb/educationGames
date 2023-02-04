import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
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
    dispatch(thunks.onSetMcqData());
  },
});

export default connect(mapState, mapDispatch)(Activity);
