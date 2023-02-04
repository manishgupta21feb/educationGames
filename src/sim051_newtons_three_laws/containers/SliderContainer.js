import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import data from "../data";
import { setSelectedF1Value } from "../actions";

const mapState = (state) => {
  const screenAriaValue = data.dataList.map((val) => {
    return val.label;
  });
  return {
    min: 60,
    step: 20,
    max: 140,
    datalist: data.dataList,
    orientation: "horizontal",
    title: data.sliderLabel,
    datalistClasses: "sliderClasses show-label-only",
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Slider);
