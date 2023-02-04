import { connect } from "react-redux";
import InofBox from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks } from "../actions/";

const mapState = (state) => ({
  id: "completionpopup",
  ...data.completionPopup,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, matchDispatch)(InofBox);
