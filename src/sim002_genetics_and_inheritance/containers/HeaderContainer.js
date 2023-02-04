import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";
import { connect } from "react-redux";
import { togglePopup } from "../actions";

const mapState = (state) => ({
  preventAutoFocus: true,
  disabled: state.resetBtnState,
  infoLabel: state.appData.labels.info,
  resetLabel: state.appData.labels.reset,
  hideImmediately: state.showLimitWarning,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
});

const mapDispatch = (dispatch) => ({
  onInfoClick: () => {
    dispatch(togglePopup(2));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onResetClick: () => {
    dispatch(togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Header);
