import CarComponent from "../components/activity/CarAnimation";
import { connect } from "react-redux";
import data from "../data";
import {
  playAnimation,
  thunk,
  graphValue,
  graphValueforTime,
  updateDistance,
  updateTime,
  updateAcceleration,
  sliderDisable,
  setLastTripDistance,
} from "../actions/activity";
import {
  togglePopup,
  toggleToastMessage,
  ariaLiveText,
} from "../actions/index";

const mapStateToProps = (state) => ({
  data: data,
  time: state.selectedTime,
  tripCount: state.tripCount,
  scaleValue: state.scaleChange,
  distance: state.selectedDistance,
  currentPopup: state.currentPopup,
  activityReset: state.activityReset,
  selectedUnit: state.selectedControl,
  translateState: state.translateState,
  carCurrentTime: state.carCurrentTime,
  animationState: state.animationState,
  acceleration: state.selectedAcceleration,
  lastTripDistance: state.lastTripDistance,
  selectedDirection: state.selectedDirection,
  isPopupActive: !!state.currentPopup.length,
  carCurrentPosition: state.carCurrentPosition,
  carPreviousValue: state.graphValue[state.graphValue.length - 1],
});

const mapDispatchToProps = (dispatch) => ({
  playAnimation: (state) => {
    dispatch(playAnimation(state));
  },
  updateDistance: (value) => {
    dispatch(updateDistance(value));
  },
  // updateTime: (value) => {
  //   dispatch(updateTime(value));
  // },
  updateAcceleration: (value) => {
    dispatch(updateAcceleration(value));
  },
  togglePopup: (id) => {
    dispatch(togglePopup(id));
  },
  tripValue: (trip) => {
    dispatch(thunk.tripValue(trip));
    if (trip > 5) {
      TincanManager.data.percentage = 100;
      TincanManager.data.completed = true;
      TincanManager.saveTincanData();
    }
  },
  graphState: (state) => {
    dispatch(thunk.graphState(state));
  },
  updateTranslateValue: (state) => {
    dispatch(thunk.updateTranslateValue(state));
  },
  toggleToastMessage: (toggle) => {
    dispatch(toggleToastMessage(toggle));
  },
  graphValue: (value) => {
    dispatch(graphValue(value));
  },
  carPositionValue: (value, time) => {
    dispatch(thunk.carPositionValue(value, time));
    dispatch(ariaLiveText(data.carPositionLiveText.replace("-1-", value)));
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 200);
  },
  carTimeValue: (value) => {
    dispatch(thunk.carTimeValue(value));
  },
  graphValueforTime: (value) => {
    dispatch(graphValueforTime(value));
  },
  setLastTripDistance: (value) => {
    dispatch(setLastTripDistance(value));
  },
  setLiveText: (text) => {
    dispatch(ariaLiveText(text));
  },
  showTripCompleteToast: () => {
    dispatch(thunk.showTripCompleteToast());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarComponent);
