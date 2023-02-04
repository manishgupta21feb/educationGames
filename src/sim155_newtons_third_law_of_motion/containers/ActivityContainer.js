import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    selected: state.globalTab,
    observationMotive: data.observationMotive,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
