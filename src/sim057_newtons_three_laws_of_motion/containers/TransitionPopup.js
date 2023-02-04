import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import TransitionPopup from "../../app/components/CompletionScreen";
import { togglePopup } from "../actions/index";
import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  ...data.transitionPopup,
  id: "transitionPopup",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    dispatch(thunk.onContinue());
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(TransitionPopup);
