import { connect } from "react-redux";
import Screen0 from "../components/Screens/Screen0";

import data from "../data";
import { thunk, common, updateToastMsg } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.questionScreenZero,
    options: state.elementData,
    optionsResult: data.screen0optionsResult,
    isReset: state.isReset,
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatch = (dispatch) => ({
  initData: () => {
    dispatch(common.updateResetBtnState(false));
    dispatch(thunk.fetchQuestion(data.screen0options));
  },
  onContinueClick: () => {
    dispatch(thunk.onContinue(4));
  },
  updateResetState: () => {
    dispatch(common.updateResetBtnState(true));
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

export default connect(mapState, mapDispatch)(Screen0);
