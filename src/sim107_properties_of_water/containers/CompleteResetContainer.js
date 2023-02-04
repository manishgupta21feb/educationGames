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
    setTimeout(() => {
      dispatch(thunks.resetActivity());
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
