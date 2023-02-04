import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { togglePopup, toggleToastMessage } from "../actions/";

const mapState = (state) => ({
  text: data.finishButton.text,
  label: data.finishButton.label,
  classes: "toast-secondary-button positive finish-button",
  ariaLable: data.finishButton.ariaLabel,
  // isPopupActive: state.tripCount,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(toggleToastMessage(false));
    dispatch(togglePopup(3));
    EventManager.broadcast("COMPLETION_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(Button);
