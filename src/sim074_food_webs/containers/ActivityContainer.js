import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    infoDialogBoxText: data.infoPopupText,
    partiallyCorrect: state.partiallyCorrect,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    wrongAnswer: state.wrongAnswer,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
