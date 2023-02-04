import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data/index";
import { thunks } from "../actions";

const mapState = (state) => ({
  id: "completionReset",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
