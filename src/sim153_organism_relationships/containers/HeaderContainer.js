import { connect } from "react-redux";
import Header from "../../app/components/Header";
import { common } from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => {
  
  return{
  

  infoLabel: data.buttonLabels.info,
  resetLabel: data.buttonLabels.reset,
  disabled: state.resetBtnState,
  hideImmediately: state.showToastMessage,
  setFocusOnReset: state.resetFocusState,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  preventAutoHide: state.currentPopup.indexOf(7) >= 0|| state.currentPopup.indexOf(6) >= 0 ,
};};
const mapDispatchToProps = (dispatch) => ({
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 500);
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
