import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import TransitionPopup from "../../app/components/CompletionScreen";
import data from "../data";
import { thunks, common, secondScreen } from "../actions";

const mapState = (state) => ({
  ...data.transitionPopup,
  id: "transitionPopup",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onContinue(true));
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(TransitionPopup);
