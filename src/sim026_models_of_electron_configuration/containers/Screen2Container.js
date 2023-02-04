import { connect } from "react-redux";
import Screen2 from "../components/Screens/Screen2";

import data from "../data";
import { thunk, common, updateToastMsg } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.questionScreenTwo,
    options: state.elementData,
    optionsResult: data.screen2optionsResult,
    optionsSectionsOptions: data.screen2optionsSectionsOptions,
    screen2optionsSections: data.screen2optionsSections,
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatch = (dispatch) => ({
  initData: () => {
    dispatch(thunk.fetchQuestion(data.screen2options));
  },
  onContinueClick: () => {
    dispatch(thunk.onContinue(6));
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

export default connect(mapState, mapDispatch)(Screen2);
