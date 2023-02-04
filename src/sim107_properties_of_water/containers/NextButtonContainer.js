import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunks, common } from "../actions";
const mapState = (state) => ({
  text:
    state.visitedHotspots.length == 3 ? data.buttonFinish : data.buttonContinue,
  isPopUpOpen: !!state.currentPopup.length,
  classes:
    state.visitedHotspots.length == 3
      ? "toast-secondary-button positive"
      : "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
      dispatch(thunks.handleNextButtonClick());
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
