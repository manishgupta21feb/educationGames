import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  text: data.buttonNext,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
  resetBtnState: state.resetBtnState,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 350);
    dispatch(common.togglePopup(8));
  },
});

export default connect(mapState, mapDispatch)(Button);
