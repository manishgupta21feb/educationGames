import { connect } from "react-redux";
import { common, setSelectedF1Value, updateToastMsg } from "../actions";
import OvercomingFriction from "../components/OvercomingFriction";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedF1Value: state.selectedF1Value,
    screenInfo: data.ScreenInfo.screen1,
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      if (value !== undefined) {
        dispatch(setSelectedF1Value(value));
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
    resetF1Value: () => {
      dispatch(setSelectedF1Value(80));
      dispatch(common.onChangeScreen(0));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OvercomingFriction);
