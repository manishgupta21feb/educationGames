import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import TextData from "../config/index";
import { common, thunks, updateResetYesClicked } from "../actions";

const mapState = (state) => ({
  ...TextData.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(updateResetYesClicked(true));
    dispatch(thunks.resetGamePT());
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
