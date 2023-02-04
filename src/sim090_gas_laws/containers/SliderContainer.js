import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import data from "../data";
import { setUpdateSlider, thunk } from "../actions";
const mapState = (state) => {
  return {
    min: 0,
    step: 1,
    max: 4,
    datalist: state.selectedQuestion.slider[0].listitems,

    orientation: "horizontal",

    datalistClasses: "sliderClasses show-label-only",
    isPopupActive: !!state.currentPopup.length,
    isInverse: state.selectedQuestion.isInverse,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Slider);
