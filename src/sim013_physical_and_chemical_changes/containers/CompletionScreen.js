import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  id: "compScreen",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.resetActivity(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
