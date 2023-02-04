import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.next,
  label: data.buttonLabels.next,
  isPopupActive: !!state.currentPopup.length,
  classes: "toast-secondary-button positive right-arrow",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.nextButtonClick());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Button);
