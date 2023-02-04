import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  common,
  setSelectedItem,
  resetPriviousSelectedItem,
  thunk,
} from "../actions";

const mapState = (state) => {
  return {
    text: data.buttonContinue,
    isPopupActive: !!state.currentPopup.length,
    classes: `right-arrow toast-secondary-button positive`,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.setResetFocusState(true));
    dispatch(common.toggleToastMessage(false));
    setTimeout(() => {
      dispatch(setSelectedItem(""));
      dispatch(common.onChangeScreen(0));
      dispatch(resetPriviousSelectedItem());
    }, 100);
    dispatch(thunk.saveState());
  },
});

export default connect(mapState, mapDispatch)(Button);
