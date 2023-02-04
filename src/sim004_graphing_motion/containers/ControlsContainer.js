import data from "../data";
import { connect } from "react-redux";
import { thunk, playAnimation, selectDirection } from "../actions/activity";
import EventManager from "../../app/events/manager";
import ProgrammingController from "../components/activity/Controls";

const mapStateToProps = (state) => ({
  time: state.selectedTime,
  distance: state.selectedDistance,
  acceleration: state.selectedAcceleration,
  selectedDirection: state.selectedDirection,
  animationState: state.animationState,
  tripCount: state.tripCount,
  accelerationData: state.accelerationData,
  disableState: state.disableState,
  selectedControlOption: state.selectedControl,
  isPopupActive: !!state.currentPopup.length,
  directions: data.directions,
  radiobuttonLabel: data.radiobuttonLabel,
  controlInstructionsText: data.controlInstructionsText,
  text: {
    time: data.timeHeadingText,
    distance: data.distanceHeadingText,
    direction: data.directionHeadingText,
    acceleration: data.accelerationHeadingText,
  },
});

const mapDispatchToProps = (dispatch) => ({
  selectedRange: () => {
    dispatch(thunk.selectedRange());
  },
  playAnimation: (state) => {
    dispatch(playAnimation(state));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  selectDirection: (id) => {
    dispatch(selectDirection(id));
  },
  tripValue: (trip) => {
    dispatch(thunk.tripValue(trip));
  },
  sliderDisable: (value) => {
    dispatch(sliderDisable(value));
  },
  playAudio: () => {
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgrammingController);
