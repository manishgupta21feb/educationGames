import Counter from "../../app/components/Counter";
import { connect } from "react-redux";
import { rightCounter } from "../actions";
import { thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    min: 0,
    max: 400,
    step: 50,
    initialValue: 50,
    disabled: state.animateEnd,
    isPopupActive: !!state.currentPopup.length,
    titleIncrement: data.counterLabel.increment,
    titleDecrement: data.counterLabel.decrement,
    labelOne: data.counterLabel.rightIncrement,
    labelTwo: data.counterLabel.rightDecrement,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (count) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.rightCounter(count));
  },
});

export default connect(mapState, mapDispatch)(Counter);
