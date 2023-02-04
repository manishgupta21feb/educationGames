import { connect } from "react-redux";
import Slider from "../../app/components/Slider";

import { setUpdateSlider } from "../actions";
const mapState = (state) => {
  const data = state.getData;
  return {
    min: 0,
    step: 1,
    max: 2,
    datalist: data.slider.listitems,
    value: state.getUpdateSlider,
    orientation: "horizontal",
    title: data.slider.title,
    disabled: !!state.currentPopup.length,
    ariaValueText: data.valuetextArray,
    datalistClasses: "sliderClasses show-label-only",
    isPopupActive: !!state.currentPopup.length || state.getForceBegin,
    /*  labelledby: "speed-and-force", */
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    if (value !== undefined) {
      dispatch(setUpdateSlider(value));
      EventManager.broadcast("PRIMARY_CLICK");
    }
  },
});

export default connect(mapState, mapDispatch)(Slider);
