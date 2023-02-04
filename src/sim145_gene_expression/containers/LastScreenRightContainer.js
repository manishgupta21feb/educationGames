import { connect } from "react-redux";
import data from "../data";
import LastScreenRightView from "../components/LastScreen/right";
import { common, updateLastScreen } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  continueButtonLabel: data.buttonLabels.continue,
  finishButtonLabel: data.buttonLabels.finish,
  isPopupActive: !!state.currentPopup.length,
  currentScreen: state.sim145CurrentScreen,
  lastScreenPart: state.lastScreenPart,
  alligatorsArray: state.alligatorsArray,
  data,
});

const mapDispatch = (dispatch) => ({
  lastScreenOnClick: () => {
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.setResetFocusState(true));
    dispatch(updateLastScreen("second"));
    dispatch(common.ariaLiveText(""));
  },
  finishOnClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    EventManager.broadcast("COMPLETION_SCREEN");
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(LastScreenRightView);
