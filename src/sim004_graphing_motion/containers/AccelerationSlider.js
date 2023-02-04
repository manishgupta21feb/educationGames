import { connect } from "react-redux";
import Slider from "../../app/components/Slider";

import data from "../data";
import { updateAcceleration, sliderDisable } from "../actions/activity";

const mapState = (state) => ({
  min: data.min,
  max: data.max,
  disableState: state.disableState,
  value: state.selectedAcceleration,
  isPopupActive: !!state.currentPopup.length,
  title: data.slidersLabels.acceleration.title,
  datalist: data.accelerationDataList.listitems,
  tabindex: state.currentPopup.length ? "-1" : 0,
  arialabel: data.slidersLabels.acceleration.ariaLabel,
  disabled: state.animationState || state.tripCount > 5,
  valuelabel: data.slidersLabels.acceleration.valueLabel,
  altValueText: `${state.selectedAcceleration} ${data.slidersLabels.acceleration.valueLabel}`,
});

const matchDispatch = (dispatch) => ({
  onChange: (value) => {
    //  console.log('here: ', value);
    if (value !== undefined) {
      dispatch(updateAcceleration(value));
      dispatch(sliderDisable(true));
    }
  },
});

export default connect(mapState, matchDispatch)(Slider);
