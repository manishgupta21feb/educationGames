import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import { common, thunks } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "6",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(thunks.resetActivity());
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
