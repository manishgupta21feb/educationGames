import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import data from "../data";
import { thunks, updateSlider } from "../actions";
import EventManager from "../../app/events/manager";
const mapState = (state) => {
  const dataLabel = data.sliderData.filter(
    (s) => s.value == state.selectedTimeline
  )[0];
  return {
    min: 0,
    step: 1,
    max: data.sliderData.length - 1,
    datalist: data.sliderData,
    value: state.selectedTimeline,
    orientation: "vertical",
    title: state.secondScreen ? dataLabel.label2 : dataLabel.label1,
    disabled: !!state.currentPopup.length || !state.mcqShow,
    ariaValueText: state.secondScreen
      ? data.valuetextArray
      : data.valuetextArray1,
    datalistClasses: "sliderClasses",
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    console.log(value);
    dispatch(thunks.sliderActivity(value));
  },
});

export default connect(mapState, mapDispatch)(Slider);
