import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunk } from "../actions/activity";

const mapState = (state) => ({
  content: data.finishBoxContent,
  type: "positive",
  heading: data.finsihBoxHeader,
  buttonText: data.buttonReset,
  buttonLabel: data.buttonReset,
  buttonClasses: "reset-white reverse icon",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetActivity());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
