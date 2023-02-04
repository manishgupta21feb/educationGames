import { connect } from "react-redux";
import Screen3 from "../components/activity/Screens/Screen3";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => ({
  showIntroScreen: state.toggleScreen,
  quizArea: data.Screen3.questionHeading,
  isPopupActive: !!state.currentPopup.length,
  // elementData: state.optionsData,
  questionsList: state.questionsList,
  draggableItems: state.optionsData,
  submitBtnText: data.buttonLabels.submitAnswer,
  buttonFinish: data.buttonLabels.finish,
  showFinishButton: state.showFinishButton,
  correctAttempt: state.submittedAnswer,
  observationsData: state.observationsData,
  currentPopup: state.currentPopup,
  h1InfoTextA11Y: data.h1InfoTextA11Y,
});

const mapDispatch = (dispatch) => ({
  fetchElements: () => {
    dispatch(thunk.fetchElements());
  },
  fetchQuestions: () => {
    dispatch(thunk.fetchQuestionsList());
  },
  submitAnswer: (data) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunk.submitAnswer());
  },
  setFocusonDragItem: (answerId) => {
    dispatch(setFocusonDragItem(answerId));
  },
  finshAll: () => {
    dispatch(thunk.finshAll());
  },
});

export default connect(mapState, mapDispatch)(Screen3);
