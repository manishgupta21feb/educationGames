import { connect } from "react-redux";
import { updateTime, sliderDisable } from "../actions/activity";
import Slider from "../../app/components/Slider";
import data from "../data";
// import data from "../data/data.en";
console.log("data", data);

const mapState = (state) => ({
  min: 1,
  max: 5,
  value: state.selectedTime,
  disableState: state.disableState,
  title: data.slidersLabels.time.title,
  datalist: data.timeDataList.listitems,
  isPopupActive: !!state.currentPopup.length,
  arialabel: data.slidersLabels.time.ariaLabel,
  tabindex: state.currentPopup.length ? "-1" : 0,
  disabled: state.animationState || state.tripCount > 5,
  altValueText:
    state.selectedTime > 1
      ? `${state.selectedTime} ${data.slidersLabels.time.valueLabel2}`
      : `${state.selectedTime} ${data.slidersLabels.time.valueLabel1}`,
  valuelabel:
    state.selectedTime > 1
      ? data.slidersLabels.time.valueLabel2
      : data.slidersLabels.time.valueLabel1,
});

const matchDispatch = (dispatch) => ({
  onChange: (value) => {
    // console.log('here: ', value);
    if (value !== undefined) {
      dispatch(updateTime(value));
      dispatch(sliderDisable(true));
    }
  },
});

export default connect(mapState, matchDispatch)(Slider);
