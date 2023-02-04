import { connect } from "react-redux";
import Screen1 from "../components/Screens/Screen1";

import data from "../data";
import { thunk, common, updateToastMsg } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.questionScreenOne,
    options: state.elementData,
    optionsResult: data.screen1optionsResult,
    screen1optionsSectionsOptions: data.screen1optionsSectionsOptions,
    screen1optionsSections: data.screen1optionsSections,
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatch = (dispatch) => ({
  initData: () => {
    dispatch(thunk.fetchQuestion(data.screen1options));
  },
  onContinueClick: () => {
    dispatch(thunk.onContinue(5));
  },
  onCorrect: () => {
    EventManager.broadcast("POSITIVE_FEEDBACK");
    dispatch(updateToastMsg("correct"));
    dispatch(common.toggleToastMessage(true));
  },
  onIncorrect: () => {
    EventManager.broadcast("NEGATIVE_FEEDBACK");
    dispatch(updateToastMsg("incorrect"));
    dispatch(common.toggleToastMessage(true));
  },
  hideToast: () => {
    dispatch(common.toggleToastMessage(false));
  },
  setResetFocusState: () => {
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(Screen1);
