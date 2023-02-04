import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import FullView from "../components/Screens/FullView/index";

import data from "../data/index";
import { common, thunks, answerSubmitted } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.Screen2.questionHeading,
    elementData: state.optionsData,
    questionsList: state.questionsList,
    draggableItems: state.optionsData,
    submitBtnText: data.submitAnswer,
    buttonFinish: data.buttonFinish,
    showFinishButton: state.showFinishButton,
    audioStatePlay: state.audioStatePlay,
  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {
    dispatch(common.thunks.onChangeScreen(val));
  },
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
