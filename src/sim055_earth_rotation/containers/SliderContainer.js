import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import data from "../data";
import { setUpdateSlider } from "../actions";
const mapState = (state) => {
  return {
    min: 0,
    step: 1,
    max: 8,
    datalist: data.slider.listitems,
    value: state.getUpdateSlider,
    orientation: "horizontal",
    title: data.slider.listitems.filter(
      (li) => li.value == state.getUpdateSlider
    )[0].label,
    disabled: !!state.currentPopup.length,
    ariaValueText: data.valuetextArray,
    datalistClasses: "sliderClasses show-label-only",
    isPopupActive: !!state.currentPopup.length,
    labelledby: "schoolViewHeading",
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
