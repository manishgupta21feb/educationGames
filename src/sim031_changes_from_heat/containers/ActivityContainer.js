import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    showStatic: state.showStatic,
    initialInformationText: data,
    currentPopup: state.currentPopup,
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
    selectedQuestion: state.selectedQuestion,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  announceLiveText: () => {
    console.log("data.fullViewLiveText: ", data.fullViewLiveText);
    dispatch(common.ariaLiveText(data.fullViewLiveText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 400);
  },
});

export default connect(mapState, mapDispatch)(Activity);
