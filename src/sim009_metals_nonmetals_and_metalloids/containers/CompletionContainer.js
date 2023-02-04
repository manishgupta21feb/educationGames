import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  id: "5",
  ...data.completionScreen,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(5));
    dispatch(thunks.resetActivity(true));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
