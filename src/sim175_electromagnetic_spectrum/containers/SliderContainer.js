import { connect } from "react-redux";
import Slider from "../../app/components/Slider";

import data from "../data";

const mapState = (state) => {
  const { selectedQuestion } = state;
  let sliderList, datalistClasses;
  if (selectedQuestion == 1) {
    sliderList = data.wavelengthList.listitems4;
    datalistClasses = data.wavelengthList.list4;
  } else if (selectedQuestion == 2) {
    sliderList = data.frequencyList.listitems4;
    datalistClasses = data.wavelengthList.list4;
  } else if (selectedQuestion == 3) {
    sliderList = data.wavelengthList.listitems3;
    datalistClasses = data.wavelengthList.list3;
  } else {
    sliderList = data.frequencyList.listitems3;
    datalistClasses = data.wavelengthList.list4;
  }
  return {
    min: 1,
    max: 3,
    // title: data.wavelengthList.title,
    datalist: sliderList,
    datalistClasses: datalistClasses,
    // ariaLabel: data.wavelengthList.listitems4.label,
    tabindex: state.currentPopup.length ? "-1" : 0,
    // ariaValueText: data.wavelengthList.listitems4.label,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Slider);
