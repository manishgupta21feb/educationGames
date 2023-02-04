import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightArea from "../components/Right";

import data from "../data/index";
import { common, isRadioButtonDisable } from "../actions";

const mapState = (state) => {
  let { text, informationBoxLabel } = state.getQuestionSet;

  return {
    draggableItems: state.draggableItems,
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    introHeading: data.rightAreaTextDescription,
    questionSet: data.questionSet,
    selectedOptions: state.selectedOptions,
    toastMsg: state.toastMsg,
    getNextQuestion: state.getNextQuestion,
    currentPopup: state.currentPopup,
    questionHeading: data.questionHeading,
    nextButtonState: state.nextButtonState,
    informationBoxLabel: informationBoxLabel,
    getQuestionSet: state.getQuestionSet,
    optionResults: state.optionResults,
    nextButtonState: state.nextButtonState,
    newQuestion: text,
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.togglePopup(3));
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 300);
  },
  isRadioButtonDisable: (data) => {
    dispatch(isRadioButtonDisable(data));
  },
  onClickOfImage: () => {
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(RightArea);
