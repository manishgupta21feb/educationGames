import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    showToastMessage: state.showToastMessage,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    wrongAnswer: state.wrongAnswer,
    isPopupActive: !!state.currentPopup.length,
    secondScreen: state.secondScreen,
    imageAltText: data.imageAltText,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
