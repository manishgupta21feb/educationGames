import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data";
import {thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    data,
    currentLayout: state.currentLayout,
    answerSubmitted: state.answerSubmitted,
    correctAttempt: state.correctAnswer,
    showToastMessage: state.showToastMessage,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(thunks.onActivityLoad());
  },
});

export default connect(mapState, mapDispatch)(Activity);
