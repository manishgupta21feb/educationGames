import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data/data.en";

const mapState = (state) => {
  // console.log(state.selectedDraggable, "llllll");
  return {
    data: data,
    wrongAnswer: state.wrongAnswer,
    currentPopup: state.currentPopup,
    answerAttempt: state.submitAnswer,
    secondScreen: state.secondScreenValue,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    submitButtonPressed: state.submitButtonPressed,
    scenerioVisitedValue: state.scenerioVisitedValue,
    zindexStatus:state.zindexStatus,
    matchedItems:
      state.matchedItems.length > 0
        ? state.matchedItems[state.matchedItems.length - 1].correctMessage
        : "",
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
