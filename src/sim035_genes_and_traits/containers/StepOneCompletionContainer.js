import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "transitionpup",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    dispatch(common.onChangeScreen(1));
    dispatch(common.ariaLiveText(" "));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
