import Activity from "../components/activity";
import { connect } from "react-redux";
import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    correctAttempt: state.correctAnswer,
    audioStatePlay: state.audioStatePlay,
    startActivity: state.startSimulation,
    toastMsg: state.toastMsg,
    answerSubmitted: state.answerSubmitted,
    currentLayout: state.currentLayout,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
