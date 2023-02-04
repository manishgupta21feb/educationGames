import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    currentScreen: state.currentScreen,
    helpBoxContent: data.globalUsedText.helpBoxContent,
    answerSubmitted: state.answerSubmitted,
    showToastMessage: state.showToastMessage,
    correctAttempt: state.correctAnswer,
    testDescription: data.testDescription,
    screen3InfoPopupText: data.screen3InfoPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
