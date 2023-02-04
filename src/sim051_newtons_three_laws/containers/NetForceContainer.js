import { connect } from "react-redux";
import {
  common,
  doReset,
  setSelectedF1Value,
  setSelectedF2Value,
  updateToastMsg,
} from "../actions";
import NetForce from "../components/NetForce";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedF1Value: state.selectedF1Value,
    selectedF2Value: state.selectedF2Value,
    screenInfo: data.ScreenInfo.screen2,
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onF1Change: (value) => {
      if (value !== undefined) {
        dispatch(setSelectedF1Value(value));
      }
    },
    onF2Change: (value) => {
      if (value !== undefined) {
        dispatch(setSelectedF2Value(value));
      }
    },
    onCorrect: (isPopupActive) => {
      EventManager.broadcast("POSITIVE_FEEDBACK");
      if(!isPopupActive){
        dispatch(updateToastMsg("correct"));
        dispatch(common.toggleToastMessage(true));
      }
    },
    onIncorrect: () => {
      EventManager.broadcast("NEGATIVE_FEEDBACK");
      dispatch(updateToastMsg("incorrect"));
      dispatch(common.toggleToastMessage(true));
    },
    btnSound: () => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(updateToastMsg(" "));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.setResetFocusState(true));
    },
    resetF1F2Value: () => {
      dispatch(doReset());
      dispatch(common.onChangeScreen(0))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NetForce);
