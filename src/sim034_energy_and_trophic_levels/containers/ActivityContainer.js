import Activity from "../components/activity";
import { connect } from "react-redux";
import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    correctAttempt: state.correctAnswer,
    showToastMessage: state.showToastMessage,
    answerAttempted: state.answerAttempted,
    initialInformationText: data,
    selectedQuestion: state.selectedQuestion,
    currentScreen: state.currentScreen,
    popupImageAlt: data.activityAlts.popupImage,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
