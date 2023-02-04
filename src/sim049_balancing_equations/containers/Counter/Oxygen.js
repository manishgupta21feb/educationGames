import Counter from "../../../app/components/Counter";
import { connect } from "react-redux";

import { thunks, common, counter } from "../../actions";
import data from "../../data";

const mapState = (state) => {
  return {
    min: 0,
    max: 5,
    // hideTooltip: true,
    titleIncrement: data.counterLabels[0].increment,
    titleDecrement: data.counterLabels[0].decrement,
    labelOne: data.counterLabels[0].labelOne,
    labelTwo: data.counterLabels[0].labelTwo,
    reset: state.resetCounterValues,
    isPopupActive: !!state.currentPopup.length,
    labelledby: state.selectedOption == data.mcqOptions[0].id ? "eq1" : "eq3",
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (count) => {
    dispatch(thunks.onOxygenChange(2 * count, count, "oxygen"));
    dispatch(common.updateResetBtnState(false));
    dispatch(counter(count));
  },
  onIncrementClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onDecrementClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Counter);
