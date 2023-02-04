import Header from "../../app/components/Header";
import { connect } from "react-redux";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(3) >= 0;
  return {
    preventAutoHide,
    disabled: state.resetBtnState,
    infoLabel: data.buttonLabels.info,
    resetLabel: data.buttonLabels.reset,
    setFocusOnReset: state.resetFocusState,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onInfoClick: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
