import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    submitButtonPressed: state.submitButtonPressed,
    toastMsg: state.toastMsg,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.setDraggable,
    wrongAnswer: state.wrongAnswer,
    answerAttempt: state.submitAnswerMcq,
    mainImg: data.mainImg,

    setStatic: state.setStatic,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.activityLoaded());
    dispatch(thunks.setQuestion());
  },
});

export default connect(mapState, mapDispatch)(Activity);
