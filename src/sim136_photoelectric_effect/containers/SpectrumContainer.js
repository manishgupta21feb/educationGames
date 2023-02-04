import { connect } from "react-redux";
import SpectrumAnimation from "../components/activity/SpectrumAnimation";

import data from "../data";
import { common, playAnimation } from "../actions";

const mapStateToProps = (state) => ({
  data: data,
  wavelength: state.selectedWavelength,
  tripCount: state.tripCount,
  scaleValue: state.scaleChange,
  currentPopup: state.currentPopup,
  activityReset: state.activityReset,
  selectedUnit: state.selectedControl,
  translateState: state.translateState,
  animationState: state.animationState,
  isPopupActive: !!state.currentPopup.length,
  carCurrentPosition: state.carCurrentPosition,
  selectedControlOption: state.selectedControl,
});

const mapDispatchToProps = (dispatch) => ({
  playAnimation: (state) => {
    dispatch(playAnimation(state));
  },
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  setLiveText: (text) => {
    dispatch(common.ariaLiveText(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpectrumAnimation);
