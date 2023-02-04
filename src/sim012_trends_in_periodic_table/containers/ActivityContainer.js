import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { thunks, common, simulationEnd, updateDropItems } from "../actions";

const mapStateToProps = (state) => {
  return {
    toastMsg: state.toastMsg,
    elementData: data.elementData,
    dropElement: state.dropElement,
    droppedItems: state.droppedItems,
    simulationEnd: state.simulationEnd,
    correctAnswer: state.correctAnswer,
    resetBtnState: state.resetBtnState,
    correctAnswer: state.correctAnswer,
    playInstructionText: data.paragraph2,
    resetDialogText: data.resetDialogText,
    updateAttemptData: state.updateAttempt,
    answerAttempted: state.answerAttempted,
    animatedElements: data.animatedElements,
    showToastMessage: state.showToastMessage,
    selectedQuestion: state.selectedQuestion,
    isPopupActive: !!state.currentPopup.length,
    introPopupImageAlt: data.introPopupImageAlt,
    StartUpInfoText: data.StartUpInfo.instructionBoxContent,
    instructionInfoText: data.header.instructionBoxContent,
  };
};

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
