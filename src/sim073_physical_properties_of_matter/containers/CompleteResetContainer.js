import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  id: "completionReset",
  ...data.completionDialog.reset,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(7));
    dispatch(thunk.resetSimulation());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
