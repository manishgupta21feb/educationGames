import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import data from "../data";

const mapState = (state) => {
  return {
    min: 1,
    step: 1,
    max: 3,
    datalist: data.sliderValues,
    orientation: "horizontal",
    title: data.sliderLabel,
    datalistClasses: "sliderClasses show-label-only",
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Slider);
