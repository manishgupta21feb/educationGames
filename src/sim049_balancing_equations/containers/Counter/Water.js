import Counter from "../../../app/components/Counter";
import { connect } from "react-redux";

import { thunks, common, counter } from "../../actions";
import data from "../../data";

const mapState = (state) => ({
  min: 0,
  max: 5,
  titleIncrement: data.counterLabels[2].increment,
  titleDecrement: data.counterLabels[2].decrement,
  labelOne: data.counterLabels[2].labelOne,
  labelTwo: data.counterLabels[2].labelTwo,
  reset: state.resetCounterValues,
  isPopupActive: !!state.currentPopup.length,
  labelledby: state.selectedOption == data.mcqOptions[0].id ? "eq5" : "eq7",
});

const mapDispatch = (dispatch) => ({
  onChange: (count) => {
    dispatch(thunks.onProductOxygenChange(count, count));
    dispatch(thunks.onProductHydrogenChange(2 * count, count));
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
