import { connect } from "react-redux";
import Waves from "../components/Waves";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    text: data.screen_two_text,
    instruments: data.instruments,
    questions: state.questions,
    questionText: data.questionText,
    waveCommonText: data.waveCommonText,
    buttonLabels: data.buttonLabels,
    baseAltText: data.screen2Alt
  };
};

const matchDispatch = (dispatch) => ({
  onFinalFinish: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout( () => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100)
    dispatch(common.togglePopup(5));
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(false));
  },
  onContinueClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.setResetFocusState(true));
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(false));
  },
  onIncorrect: () => {
    EventManager.broadcast("NEGATIVE_FEEDBACK");
    dispatch(updateToastMsg("incorrect"));
    dispatch(common.toggleToastMessage(true));
  },
  onCorrect: () => { 
    EventManager.broadcast("POSITIVE_FEEDBACK");
    dispatch(updateToastMsg("correct"));
    dispatch(common.toggleToastMessage(true));
  }
});

export default connect(mapState, matchDispatch)(Waves);
