import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import data from "../data";
import {
  setStatic,
  resetQuestion,
  updateResetBtnState,
  setActivityStart,
  thunk,
} from "../actions/activity";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "completionReset",
  ...data.completionDialog.reset,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.reset());
    // dispatch(togglePopup(7));
    // dispatch(setStatic(false));
    // dispatch(resetQuestion());
    // dispatch(togglePopup(1));
    // dispatch(ariaLiveText(data.resetLiveText));
    // dispatch(updateResetBtnState(true));
    // dispatch(setActivityStart(false));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
