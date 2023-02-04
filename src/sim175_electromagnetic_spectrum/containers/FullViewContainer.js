import { connect } from "react-redux";
import FullView from "../components/Fullview/Fullview";
import data from "../data";
import { thunks, common, setResetFocusState } from "../actions";

const mapState = (state) => {
  const selectedQuestion = state.selectedQuestion;
  let wavelengthMapData;
  if (selectedQuestion === 1 || selectedQuestion === 2) {
    wavelengthMapData = data.wavelengthData1;
  } else if (selectedQuestion === 3 || selectedQuestion === 4) {
    wavelengthMapData = data.wavelengthData2;
  }
  return {
    question: state.question,
    currentScreen: state.currentScreen,
    questionAnswered: state.questionAnswered,
    text: data.part1Ques,
    subText: data.part1SubQues,
    popupbutton: data.popupbutton,
    isToggle: state.toggleDialog,
    toastMsg: state.toastMsg,
    elementData: wavelengthMapData,
    answerOptions: data.radioOptions,
    dropElement: state.dropElement,
    droppedItems: state.droppedItems,
    simulationEnd: state.simulationEnd,
    correctAnswer: state.correctAnswer,
    resetBtnState: state.resetBtnState,
    correctAnswer: state.correctAnswer,
    resetDialogText: data.resetDialogText,
    updateAttemptData: state.updateAttempt,
    answerAttempted: state.answerAttempted,
    animatedElements: data.animatedElements,
    showToastMessage: state.showToastMessage,
    selectedQuestion: state.selectedQuestion,
    selectedRadioQuestion: state.selectedRadioQuestion,
    isPopupActive: !!state.currentPopup.length,
    question2: state.selectedRadioQuestion.answerOptions || [],
    radioQuestions: state.questionsData,
  };
};

const mapDispatch = (dispatch) => ({
  onRadioButtonChange: (id) => {
    dispatch(thunks.setMCQ1Answer(id));
  },
  onClick: () => {
    dispatch(common.togglePopup(5));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  onInCorrectDrop: () => {
    dispatch(thunks.onInCorrectDrop());
  },
  onCorrectDrop: (currentOption) => {
    dispatch(thunks.onCorrectDrop(currentOption));
  },
  fetchQuestion: () => {
    dispatch(thunks.fetchQuestion());
  },
  updateAttempt: (val) => {
    dispatch(thunks.updateAttempt(val));
  },
  updateSimulationEnd: (val) => {
    dispatch(simulationEnd(val));
  },
  updateResetBtnState: (val) => {
    dispatch(common.updateResetBtnState(val));
  },
  updateDropItems: (val, index) => {
    dispatch(thunks.updateDropItems(val, index));
  },
});

export default connect(mapState, mapDispatch)(FullView);
