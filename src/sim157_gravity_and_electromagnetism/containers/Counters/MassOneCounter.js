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
  min: 100,
  max: 300,
  step: 100,
  titleIncrement: data.massLabelLeft1,
  titleDecrement: data.massLabelLeft2,
  labelOne: data.massLabelLeft1,
  labelTwo: data.massLabelLeft2,
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
