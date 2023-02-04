import Counter from "../../../app/components/Counter";
import { connect } from "react-redux";

import {
  thunks,
  setCounterOne,
  resetCounterValues,
  setCounterButton,
} from "../../actions";
import EventManager from "../../../app/events/manager";
import data from "../../data";

const mapState = (state) => ({
  min: 4,
  max: 8,
  step: 2,
  startFromMin: false,
  titleIncrement: data.distanceLabelOne,
  titleDecrement: data.distanceLabelTwo,
  labelOne: data.distanceLabelOne,
  labelTwo: data.distanceLabelTwo,
  labelledby: "label1",
  reset: state.resetCounterValues,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onChange: (count) => {
    dispatch(setCounterOne(count));
    dispatch(thunks.onChangeLiveText(count));
    dispatch(resetCounterValues(false));
  },
  onIncrementClick: () => {
    dispatch(setCounterButton("1"));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onDecrementClick: () => {
    dispatch(setCounterButton("2"));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Counter);
