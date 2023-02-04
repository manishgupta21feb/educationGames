import Button from "../../app/components/Button";
import { connect } from "react-redux";
import data from "../data";
import {
  common,
  setContinueState,
  thunks,
  setScreen,
  setPlotState,
} from "../actions";

const mapStateToProps = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(3) >= 0;

  return {
    preventAutoHide,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    text: data.restart,

    classes: `primary left-pos`,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(setScreen("one"));
    dispatch(setContinueState(true));
    dispatch(setPlotState(true));
    dispatch(common.setResetFocusState(true));
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    });
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
