import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

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
    currentScreen: state.currentScreen,
    selectedDraggable: state.selectedDraggable,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
