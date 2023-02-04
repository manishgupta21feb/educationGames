import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  ...data.completionScreen,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetActivity(false));
    dispatch(common.togglePopup(7));
  },
});

export default connect(mapState, matchDispatch)(CompletionScreen);
