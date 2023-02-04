import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";

const mapState = (state) => {
  const check = state.questionCount == 6;
  return {
    stepperValue: state.stepperValue,
    isPopupActive: !!state.currentPopup.length,
    text: check ? data.finish : data.buttonContinue,
    classes: `toast-secondary-button positive ${
      check ? "" : "right-arrow"
    }`.trim(),
  };
};

export default connect(mapState)(Button);
