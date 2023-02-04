import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    submitButtonPressed: state.submitButtonPressed,

    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.setDraggable,

    answerAttempt: state.submitAnswerMcq,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.activityLoaded());
  },
});

export default connect(mapState, mapDispatch)(Activity);
