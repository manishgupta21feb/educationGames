import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import TransitionPopup from "../../app/components/CompletionScreen";
import { togglePopup } from "../actions/index";
import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  const transitionPopup = state.isBall ? data.transitionPopupBall : data.transitionPopupFluid
  return{
  ...transitionPopup,
  id: "transitionPopup",
}};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    dispatch(thunks.onContinue());
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(TransitionPopup);
