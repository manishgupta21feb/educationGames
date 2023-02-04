import LaunchScreen from "../components/Screens/LaunchScreen";
import { connect } from "react-redux";
import { common, setViewVisited } from "../actions";
import EventManager from "../../app/events/manager";
const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {
    EventManager.broadcast("PRIMARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    });
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(setViewVisited(val));
    dispatch(common.onChangeScreen(val));
  },
});

export default connect(mapState, mapDispatch)(LaunchScreen);
