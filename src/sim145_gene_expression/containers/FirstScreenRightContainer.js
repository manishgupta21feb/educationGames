import { connect } from "react-redux";
import data from "../data";
import FirstScreenRightView from "../components/FirstScreen/right";
import { common, droppableChangeState, setCurrentScreen } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  continueButtonLabel: data.buttonLabels.continue,
  isPopupActive: !!state.currentPopup.length,
  firstScreenRightOST: data.firstScreenRightOST,
});

const mapDispatch = (dispatch) => ({
  firstScreenOnClick: () => {
    dispatch(common.updateResetBtnState(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.setResetFocusState(true));
    dispatch(setCurrentScreen("second"));
    dispatch(droppableChangeState(data.screen2Dropzones));
  },
});

export default connect(mapState, mapDispatch)(FirstScreenRightView);
