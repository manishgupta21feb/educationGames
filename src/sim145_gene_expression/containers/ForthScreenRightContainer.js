import { connect } from "react-redux";
import data from "../data";
import FourthScreenRight from "../components/ForthScreen/right";
import { common, setCurrentScreen } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  nextButtonLabel: data.buttonLabels.next,
  isPopupActive: !!state.currentPopup.length,
  forthScreenRightOST: data.forthScreenRightOST,
  currentScreen: state.sim145CurrentScreen,
});

const mapDispatch = (dispatch) => ({
  forthScreenOnClick: () => {
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.setResetFocusState(true));
    dispatch(setCurrentScreen("fifth"));
  },
});

export default connect(mapState, mapDispatch)(FourthScreenRight);
