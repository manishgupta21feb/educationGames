import { connect } from "react-redux";
import RightComponent from "../components/activity/Right";

import data from "../data";

const mapState = (state) => {
  return {
    resetGamePT: state.resetGamePT,
    wavelengthAlt: data.wavelengthAlt,
    wavelengthLabel: data.wavelengthLabel,
    instructionText: data.instructionText,
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(RightComponent);
