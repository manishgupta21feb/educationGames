import Counter from "../../../app/components/Counter";
import { connect } from "react-redux";

import { thunks, common, counter } from "../../actions";
import data from "../../data";

const mapState = (state) => ({
  min: 0,
  max: 5,
  titleIncrement: data.counterLabels[4].increment,
  titleDecrement: data.counterLabels[4].decrement,
  labelOne: data.counterLabels[4].labelOne,
  labelTwo: data.counterLabels[4].labelTwo,
  labelledby: "eq1",
  reset: state.resetCounterValues,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onChange: (count) => {
    dispatch(thunks.onCarbonChange(3 * count, count, "propane"));
    dispatch(thunks.onHydrogenChange(8 * count, count));
    dispatch(common.updateResetBtnState(false));
  },
  onIncrementClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onDecrementClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Counter);
