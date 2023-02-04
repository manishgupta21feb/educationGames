import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import {
  thunks,
  common,
  selectAnswerOption,
  clearButtonPressed,
} from "../actions";

const mapState = (state) => {
  const disabled =
    (state.numberOfFan && state.numberOfFan.length > 0) ||
    (state.numberOfSwitch && state.numberOfSwitch.length > 0) ||
    (state.numberOfBattery && state.numberOfBattery.length > 0) ||
    (state.numberOfWire && state.numberOfWire.length > 0);

  return {
    text: data.check,
    classes: " toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
    disabled: disabled == true ? false : true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.verifyCircuit());
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(clearButtonPressed(false));
  },
});

export default connect(mapState, matchDispatch)(Button);
