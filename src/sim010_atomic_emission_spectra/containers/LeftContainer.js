import { connect } from "react-redux";
import LeftComponent from "../components/activity/Left";

import data from "../data";
import { setPause } from "../actions";

const mapState = (state) => {
  const { selectedWavelength } = state;
  return {
    selectedWavelength,
    paused: state.isPaused,
    energyAlt: data.energyAlt,
    energyLabel: data.energyLabel,
    frequencyAlt: data.frequencyAlt,
    answerValues: data.answerValues,
    answerValues: data.answerValues,
    wavelengthAlt: data.wavelengthAlt,
    frequencyLabel: data.frequencyLabel,
    wavelengthLabel: data.wavelengthLabel,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  pauseWave: () => {
    dispatch(setPause(true));
  },
});

export default connect(mapState, mapDispatch)(LeftComponent);
