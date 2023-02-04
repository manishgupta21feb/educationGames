import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  id: "completionReset",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.reset());
    dispatch(common.ariaLiveText(data.resetLiveText));
    dispatch(common.updateResetBtnState(true));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
