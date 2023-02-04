import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  id: "compScreen",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.ariaLiveText(data.resetLiveText));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
    dispatch(common.updateResetBtnState(true));
    dispatch(thunks.resetActivity(true));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
