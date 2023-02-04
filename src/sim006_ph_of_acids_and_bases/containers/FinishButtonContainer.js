import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import NextButton from "../components/MainActivity/NextButton";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.finish,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(common.togglePopup(5));
    EventManager.broadcast("COMPLETION_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(NextButton);
