import { connect } from "react-redux";
import Slider from "../../app/components/Slider";

import data from "../data";
import { thunk } from "../actions/activity";

const mapState = (state) => ({
  min: 1,
  max: 3,
  ariaLabel: "Forces",
  value: state.force,
  orientation: "vertical",
  datalist: data.timeDataList,
  title: data.sliderLabel,
  ariaValueText: data.valuetextArray,
  tabindex: state.force == 2 || state.currentPopup.length ? "-1" : "0",
  disabled: state.force !== 2 || !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    if (value !== undefined) {
      dispatch(thunk.updateForce(value));
    }
  },
});

export default connect(mapState, mapDispatch)(Slider);
