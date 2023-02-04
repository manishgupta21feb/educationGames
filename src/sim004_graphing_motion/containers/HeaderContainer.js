import Header from "../../app/components/Header";
import { connect } from "react-redux";
import data from "../data";
import { togglePopup } from "../actions/";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  infoLabel: data.buttonInfo,
  resetLabel: data.buttonReset,
  disabled: state.resetDisable,
  // disableInfo: state.animationState,
  hideImmediately: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  preventAutoHide: state.currentPopup.indexOf(3) >= 0,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
});

const mapDispatchToProps = (dispatch) => ({
  onInfoClick: () => {
    dispatch(togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onResetClick: () => {
    dispatch(togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
