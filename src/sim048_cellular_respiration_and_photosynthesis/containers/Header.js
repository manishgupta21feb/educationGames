import { connect } from "react-redux";
import Header from "../../app/components/Header";

import data from "../data";
import { common } from "../actions";

const mapState = (state) =>  {
  const preventAutoHide =
    state.currentPopup.indexOf(4) >= 0 ;
  return {
    preventAutoHide,
    infoLabel: data.buttonLabels.info,
    resetLabel: data.buttonLabels.reset,
    isPopupActive: !!state.currentPopup.length,
    disabled: !!state.resetBtnState,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
    setFocusOnReset: state.resetFocusState,
    hideImmediately: state.showToastMessage
  };
};

const matchDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
});

export default connect(mapState, matchDispatch)(Header);
