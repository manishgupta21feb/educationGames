import Activity from "../components/activity";
import { connect } from "react-redux";
import { togglePopup } from "../actions/";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    correctAttempt: state.correctAnswer,
    showToastMessage: state.showToastMessage,
    answerAttempted: state.answerAttempted,
    initialInformationText: data,
    selectedQuestion: state.selectedQuestion,
    mcqInfotext: data.mcqInfotext,
    showStatic: state.showStatic,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
