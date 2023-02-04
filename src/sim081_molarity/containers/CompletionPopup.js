import { connect } from "react-redux";
import CompletionPopup from "../../app/components/CompletionScreen";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  ...data.completionPopup,
  id: "completionPopup",
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(7));
    dispatch(thunk.resetActivity(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(CompletionPopup);
