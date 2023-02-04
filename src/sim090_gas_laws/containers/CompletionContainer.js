import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunk } from "../actions";

const mapState = (state) => ({
  ...data.completionPopup,
  id: "completionPopup",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetFunctions());
    dispatch(common.setResetFocusState(false));
  },
});

export default connect(mapState, matchDispatch)(CompletionScreen);
