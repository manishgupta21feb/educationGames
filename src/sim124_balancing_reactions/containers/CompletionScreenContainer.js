import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, resetQuestion } from "../actions";

const mapState = (state) => ({
  id: "completionContinue",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
