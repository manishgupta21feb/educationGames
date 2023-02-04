import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import NextButton from "../../app/components/Button";

import data from "../data";
import { thunk } from "../actions/activity";

const mapState = (state) => ({
  text: data.continue,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.nextButtonClick());
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("COMPLETION_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(NextButton);
