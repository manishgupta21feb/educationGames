import Counter from "../../../app/components/Counter";
import { connect } from "react-redux";

import { thunks, common, counter } from "../../actions";
import EventManager from "../../../app/events/manager";
import data from "../../data";

const mapState = (state) => ({
  min: 0,
  max: 5,
  titleIncrement: data.counterLabels[3].increment,
  titleDecrement: data.counterLabels[3].decrement,
  labelOne: data.counterLabels[3].labelOne,
  labelTwo: data.counterLabels[3].labelTwo,
  labelledby: "eq5",
  reset: state.resetCounterValues,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onChange: (count) => {
    dispatch(thunks.onProductCarbonChange(count, count, "carbonDiOxide"));
    dispatch(thunks.onProductOxygenChangeTwo(2 * count, count));
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
