import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import TransitionPopup from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  ...data.transitionPopup,
  id: "transitionPopup",
});


const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.setViewType("water"));
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(TransitionPopup);
