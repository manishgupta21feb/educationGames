import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    correctAttempt: state.correctAnswer,
    showToastMessage: state.showToastMessage,
    answerAttempted: state.answerAttempted,
    initialInformationText: data,
    selectedQuestion: state.selectedQuestion,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
