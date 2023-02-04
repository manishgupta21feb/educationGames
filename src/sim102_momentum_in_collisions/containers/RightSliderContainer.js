import { connect } from "react-redux";
import RightSlider from "../../app/components/Slider";
import data from "../data";
import { setUpdateSlider, sliderTwoValue, thunk } from "../actions";

const mapState = (state) => {
  return {
    min: 0,
    step: 1,
    max: 1,

    title: " ",
    datalist: data.listitems,
    value: state.sliderTwoValue,
    orientation: "horizontal",
    disabled: !!state.currentPopup.length || state.sliderClicked,
    ariaValueText: data.valuetextArray0,
    datalistClasses: "sliderClasses show-label-only",
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    dispatch(sliderTwoValue(value));
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(RightSlider);
