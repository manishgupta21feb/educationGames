import { connect } from "react-redux";
import Slider from "../../app/components/Slider";

import { setUpdateSlider, setAnimationStart } from "../actions";
import data from "../data";
const mapState = (state) => {
  return {
    min: 0,
    step: 1,
    max: state.getCurrentSection == "work" ? 4 : 3,
    datalist: data[state.getCurrentSection].slider.listitems,
    value: state.getUpdateSlider,
    orientation: "horizontal",
    title: data[state.getCurrentSection].slider.title,
    labelledby: "speed-and-force",
    disabled: !!state.currentPopup.length || state.getFreezePanel,
    ariaValueText: data[state.getCurrentSection].valuetextArray,
    datalistClasses: `sliderClasses show-label-only ${
      state.getCurrentSection == "work" ? "sliderA" : "sliderB"
    }`,
    isPopupActive: !!state.currentPopup.length || state.getForceBegin,
    /*  labelledby: "speed-and-force", */
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    if (value !== undefined) {
      dispatch(setUpdateSlider(value));
      dispatch(setAnimationStart(false));
      EventManager.broadcast("PRIMARY_CLICK");
    }
  },
});

export default connect(mapState, mapDispatch)(Slider);
