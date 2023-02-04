import { connect } from "react-redux";
import { common, thunks } from "../actions";
import LaunchScreen from "../components/Screens/LaunchScreen";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    currentScreen: state.currentScreen,
    instructionText: data.launchScreenTitle,
    launchScreenButtons: data.launchScreenButtons,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    btnSound: (value) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      dispatch(thunks.updateSaveState(value));
    },
    onChangeScreen: (val) => {
      dispatch(common.onChangeScreen(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
