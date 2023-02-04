import { connect } from "react-redux";
import ProgrammingController from "../components/activity/Controls";

import data from "../data";
import { thunk, playAnimation } from "../actions";

const mapStateToProps = (state) => ({
  wavelengthName: data.wavelengthName,
  wavelength: state.selectedWavelength,
  animationState: state.animationState,
  tripCount: state.spectrumValue.length,
  accelerationData: state.accelerationData,
  disableState: state.disableState,
  selectedControlOption: state.selectedControl,
  isPopupActive: !!state.currentPopup.length,
  directions: data.directions,
  radiobuttonLabel: data.radiobuttonLabel,
  controlsHeading: data.controlsHeading,
  text: {
    time: data.timeHeadingText,
    distance: data.distanceHeadingText,
    direction: data.directionHeadingText,
    acceleration: data.accelerationHeadingText,
  },
});

const mapDispatchToProps = (dispatch) => ({
  selectedRange: () => {
    dispatch(thunk.selectedRange());
  },
  playAnimation: (state) => {
    dispatch(playAnimation(state));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  tripValue: (trip) => {
    dispatch(thunk.tripValue(trip));
  },
  sliderDisable: (value) => {
    dispatch(sliderDisable(value));
  },
  playAudio: () => {
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgrammingController);
