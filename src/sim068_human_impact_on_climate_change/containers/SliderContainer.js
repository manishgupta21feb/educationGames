import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import data from "../data";
import { thunks } from "../actions";
const mapState = (state) => {
  return {
    min: 0,
    step: 1,
    max: 3,
    // max: sliderMaxValue,
    // datalist: screenDataList,
    // datalist: ["o", "p", "m", "l"],
    datalist: data.sliderData,
    // value: 0,
    value: state.selectedTimeline,
    orientation: "horizontal",
    //title:screenDataList.filter(s=>s.value==state.selectedTimeline)[0].label,
    title: data.sliderLabel,
    disabled: !!state.currentPopup.length || state.isSliderDisabled,
    // state.sliderValueVisited.length == data.sliderData.length,
    ariaValueText: data.valuetextArray,
    datalistClasses: "sliderClasses show-label-only",
    isPopupActive: !!state.currentPopup.length,
    // labelledby: "mainheading",
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    dispatch(thunks.sliderActivity(value));
  },
});

export default connect(mapState, mapDispatch)(Slider);
