import { connect } from "react-redux";
import CompletionPopup from "../../app/components/CompletionScreen";

import data from "../data";
import {
  thunks,
  common,
  setScreenNumber,
  setResetIsVisitedBoth,
  questionCount,
} from "../actions/index";

const mapState = (state) => ({
  ...data.completionPopup,
  id: "completionPopup",
});
const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    // dispatch(thunk.resetActivity(true));
    dispatch(thunks.resetActivity());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(CompletionPopup);
