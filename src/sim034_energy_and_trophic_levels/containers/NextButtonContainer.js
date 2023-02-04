import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  const enabled = state.selectedOrganisms.length == 4;
  const className = enabled ? "" : "hide";
  return {
    disabled: !enabled,
    ariaHidden: !enabled,
    text: data.buttonNext,
    resetBtnState: state.resetBtnState,
    isPopUpOpen: !!state.currentPopup.length,
    classes: `right-arrow toast-secondary-button positive ${className}`,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.thunks.onChangeScreen(1));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(Button);
