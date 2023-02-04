import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.finish,
  classes: "toast-secondary-button positive",
  isPopupActive:!!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(common.togglePopup(3));
    EventManager.broadcast("COMPLETION_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(Button);
