import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import data from "../data";
import { setUpdateSlider, sliderVisited, thunk } from "../actions";
const mapState = (state) => {
  return {
    min: 1,
    step: 1,
    max: 4,
    title: data.sliderLabel,
    datalist: data.slider.listitems,
    value: state.getUpdateSlider,
    orientation: "horizontal",
    disabled: !!state.currentPopup.length,
    ariaValueText: data.valuetextArray,
    datalistClasses: "sliderClasses show-label-only",
    isPopupActive: !!state.currentPopup.length,
  };
};
const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    if (value) {
      dispatch(thunk.sliderActivityValue(value));
      EventManager.broadcast("PRIMARY_CLICK");
    }
  },
});

export default connect(mapState, mapDispatch)(Slider);
