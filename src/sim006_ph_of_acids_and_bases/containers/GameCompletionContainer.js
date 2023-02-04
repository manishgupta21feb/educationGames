import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.ariaLiveText(data.resetLiveText));
    dispatch(common.togglePopup(5));
    dispatch(thunks.resetGame());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
