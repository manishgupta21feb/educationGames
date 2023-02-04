import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import { common, currentWindow } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "3",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(currentWindow("assessment"));
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
