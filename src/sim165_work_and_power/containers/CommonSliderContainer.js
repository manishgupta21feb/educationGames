import { connect } from "react-redux";

import SliderComponent from "../components/Slider";
import { setForceBegin, thunk, common } from "../actions";
import data from "../data";
const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    sliderHeading: data[state.getCurrentSection].slider.sliderHeader,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(SliderComponent);
