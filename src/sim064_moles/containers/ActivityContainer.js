import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common, thunks, questionCount } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    submitButtonPressed: state.submitButtonPressed,
    toastMsg: state.toastMsg,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,

    answerSubmitted: state.answerSubmitted,
    correctAttempt: state.submittedAnswer,
    updateToastMsg: state.updateToastMsgReducer,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.setQuestion());
  },
});

export default connect(mapState, mapDispatch)(Activity);
