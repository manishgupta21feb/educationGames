import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import { common, thunk } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "4",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: (state) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    setTimeout(() =>{dispatch(common.setResetFocusState(true))},100);
    dispatch(thunk.onTransitionBtn());
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 250);
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
