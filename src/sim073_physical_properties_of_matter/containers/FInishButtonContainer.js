import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  updateResetBtnState,
  setResetFocusState,
  resetPriviousSelectedItem,
  setSelectedItem,
  common,
  thunk,
} from "../actions";

const mapState = (state) => {
  const enabled = state.priviousSelectedItem.length == 7;
  const className = enabled ? "" : "hide";
  return {
    disabled: !enabled,
    ariaHidden: !enabled,
    text: data.buttonFinish,
    resetBtnState: state.resetBtnState,
    isPopUpOpen: !!state.currentPopup.length,
    classes: `toast-secondary-button positive ${className}`,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(7));
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 350);
    dispatch(thunk.saveState());
  },
});

export default connect(mapState, mapDispatch)(Button);
