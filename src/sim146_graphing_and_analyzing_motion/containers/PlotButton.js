import Button from "../../app/components/Button";
import { connect } from "react-redux";
import data from "../data";
import {
  common,
  setPlot,
  thunks,
  setContinueState,
  setKeepCount,
} from "../actions";

const mapStateToProps = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(3) >= 0;

  return {
    preventAutoHide,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    text: data.plotButton,

    classes: `primary right-pos`,
    disabled: state.plotState,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onPlot());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
