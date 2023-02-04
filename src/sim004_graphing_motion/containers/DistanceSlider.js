import { connect } from "react-redux";
import { updateDistance } from "../actions/activity";
import Slider from "../../app/components/Slider";
import data from "../data";
// import data from "../data/data.en";

const mapState = (state) => ({
  min: 1,
  max: 5,
  value: state.selectedDistance,
  title: data.slidersLabels.distance.title,
  datalist: data.distanceDataList.listitems,
  arialabel: data.slidersLabels.distance.ariaLabel,
  disabled: state.animationState || state.tripCount > 5,
  altValueText:
    state.selectedDistance > 1
      ? `${state.selectedDistance} ${data.slidersLabels.distance.valueLabel2}`
      : `${state.selectedDistance} ${data.slidersLabels.distance.valueLabel1}`,
  valuelabel:
    state.selectedDistance > 1
      ? data.slidersLabels.distance.valueLabel2
      : data.slidersLabels.distance.valueLabel1,
  isPopupActive: !!state.currentPopup.length,
  tabindex: state.currentPopup.length ? "-1" : 0,
});

const matchDispatch = (dispatch) => ({
  onChange: (value) => {
    //  console.log('here: ', value);
    if (value !== undefined) {
      dispatch(updateDistance(value));
    }
  },
});

export default connect(mapState, matchDispatch)(Slider);
