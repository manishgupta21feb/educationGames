import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    wrongAnswer: state.wrongAnswer,
    imageAltText: data.imageAltText,
    secondScreen: state.secondScreen,
    answerAttempt: state.submitAnswer,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    submitButtonPressed: state.submitButtonPressed,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
