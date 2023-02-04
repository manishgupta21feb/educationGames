import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    showToastMessage: state.showToastMessage,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    wrongAnswer: state.wrongAnswer,
    isPopupActive: !!state.currentPopup.length,
    data: data,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
