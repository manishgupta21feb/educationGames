import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import { setResetFocusState, thunk, updateResetBtnState } from "../actions/activity";
import { ariaLiveText, togglePopup } from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  return {
  id: "completionPopup4",
  ...data.completionPopup,
  content: data.completionPopupText
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(ariaLiveText(data.resetLiveText));
    dispatch(togglePopup(4));
    dispatch(togglePopup(1));
    // dispatch(thunks.onChangeScreen(0));
    dispatch(setResetFocusState(true));
    dispatch(updateResetBtnState(false));
    dispatch(thunk.doReset());
    dispatch(ariaLiveText(" "));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
