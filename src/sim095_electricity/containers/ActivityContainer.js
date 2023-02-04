import Activity from "../components/activity";
import { connect } from "react-redux";
import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    showStatic: state.showStatic,
    initialInformationText: data,
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
    selectedQuestion: state.selectedQuestion,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    seriesFormedInsteadOfParallel: data.seriesFormedInsteadOfParallel,
    parallelFormedInsteadOfSeries: data.parallelFormedInsteadOfSeries,
    mainScreen: state.showMainScreen,
    circuitNameProps: state.circuitName,
    draggableItem: state.draggableItem,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
    dispatch(common.ariaLiveText(""));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(Activity);
