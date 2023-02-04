import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, updateWavelength } from "../actions";

const mapState = (state) => ({
  min: 1,
  step: 1,
  max: 10,
  datalist: data.datalist,
  classes: "selected-value-only",
  value: state.selectedWavelength,
  title: data.wavelengthSliderTitle,
  ariaValueText: data.valuetextArray,
  disabled: !!state.currentPopup.length,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onChange: (value) => {
    if (value !== undefined) {
      dispatch(updateWavelength(value));
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(common.updateResetBtnState(false));
    }
    dispatch(thunks.updateSaveState(value));
  },
});

export default connect(mapState, matchDispatch)(Slider);
