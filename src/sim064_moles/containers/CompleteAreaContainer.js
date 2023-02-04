import { connect } from "react-redux";
import CompleteArea from "../components/ViewArea/CompleteArea";
import data from "../data";
import { common, thunks } from "../actions";
const mapState = (state) => {
  return {
    data: data,
    count: state.questionCount,
    matchedItems: state.matchedItems,
    answerSubmitted: state.answerSubmitted,
    correctAnswer: state.submittedAnswer,
    question: state.selectedQuestion,
    submitButtonState: state.submitButtonState,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    opened: state.accessibleListVisible,
  };
};

const mapDispatch = (dispatch) => ({
  submitAnswerDnD: () => {
    dispatch(thunks.submitAnswerDnD());
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(CompleteArea);
