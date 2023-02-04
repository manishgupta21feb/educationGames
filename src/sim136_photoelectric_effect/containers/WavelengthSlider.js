import { connect } from "react-redux";
import Slider from "../../app/components/Slider";

import data from "../data";
import { updateWavelength, common } from "../actions";

const mapState = (state) => {
  return {
    min: 1,
    max: 3,
    value: state.selectedWavelength,
    disableState: state.disableState,
    title: data.slidersLabels.wavelength.title,
    datalist: data.wavelengthList.listitems,
    isPopupActive: !!state.currentPopup.length,
    ariaLabel: data.slidersLabels.wavelength.ariaLabel,
    tabindex: state.currentPopup.length ? "-1" : 0,
    disabled: state.animationState || state.tripCount > 5,
    ariaValueText: data.valuetextArray0,
  };
};

const matchDispatch = (dispatch) => ({
  onChange: (value) => {
    if (value !== undefined) {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(updateWavelength(value));
      dispatch(common.updateResetBtnState(false));
    }
  },
});

export default connect(mapState, matchDispatch)(Slider);
