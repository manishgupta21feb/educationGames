import { connect } from "react-redux";
import Root from "../components/activity";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, updateResetGamePT } from "../actions";

const mapState = (state) => {
  return {
    toastMsg: state.toastMsg,
    resetDialog: state.resetGamePT,
    helpPopupText: data.helpPopupText,
    resetPopupText: data.resetPopupText,
    initialPopupText: data.initialPopupText,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  onClick: (id) => {
    dispatch(common.togglePopup(id));
    dispatch(updateResetGamePT(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: (id) => {
    dispatch(common.togglePopup(id));
    dispatch(updateResetGamePT(false));
    dispatch(thunks.resetGamePT());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Root);
