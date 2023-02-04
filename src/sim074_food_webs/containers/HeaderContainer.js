import { connect } from "react-redux";
import Header from "../../app/components/Header";
import { common } from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  infoLabel: data.buttonInfo,
  resetLabel: data.buttonReset,
  disabled: state.resetBtnState,
  hideImmediately: state.showToastMessage || !!state.currentPopup.length,
  setFocusOnReset: state.resetFocusState,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  preventAutoHide: state.currentPopup.indexOf(7) >= 0,
});
const mapDispatchToProps = (dispatch) => ({
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
