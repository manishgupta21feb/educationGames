import Activity from "../components/activity";
import { connect } from "react-redux";
import { togglePopup } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    showStatic: state.showStatic,
    initialInformationText: data,
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
    selectedQuestion: state.selectedQuestion,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
