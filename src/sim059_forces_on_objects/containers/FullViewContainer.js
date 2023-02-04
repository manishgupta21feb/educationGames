import FullView from "../components/Screens/FullView/index";
import { connect } from "react-redux";
import { thunks, answerSubmitted } from "../actions";
import data from "../data/index";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.screen2.questionHeading,
    elementData: state.optionsData,
    questionsList: state.questionsList,
    draggableItems: state.optionsData,
    submitBtnText: data.buttonLabels.submitAnswer,
    buttonFinish: data.buttonLabels.finish,
    showFinishButton: state.showFinishButton,
    isAccessibleListVisible: state.isAccessibleListVisible,
  };
};

const mapDispatch = (dispatch) => ({
  fetchElements: () => {
    dispatch(thunks.fetchElements());
  },
  fetchQuestions: () => {
    dispatch(thunks.fetchQuestionsList());
  },
  submitAnswer: () => {
    dispatch(answerSubmitted(false));
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.submitAnswer());
  },
  finshAll: () => {
    dispatch(thunks.finshAll());
  },
});

export default connect(mapState, mapDispatch)(FullView);
