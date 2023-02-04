import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
