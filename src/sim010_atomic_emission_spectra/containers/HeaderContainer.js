import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, updateResetGamePT } from "../actions";

const mapState = (state) => {
  return {
    disabled: state.resetBtnState,
    infoLabel: data.buttonLabels.info,
    resetLabel: data.buttonLabels.reset,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  };
};

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    dispatch(updateResetGamePT(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onInfoClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Header);
