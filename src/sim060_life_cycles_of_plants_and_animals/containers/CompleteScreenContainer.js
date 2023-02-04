import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import { common, thunk } from "../actions";
import EventManager from "../../app/events/manager";
import data from "../data";

const mapState = (state) => ({
  id: "4",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() =>{dispatch(common.setResetFocusState(true))},100);
    dispatch(thunk.onReset());
    dispatch(common.togglePopup(4));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
