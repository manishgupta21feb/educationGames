import Counter from "../../../app/components/Counter";
import { connect } from "react-redux";

import { thunks, common, counter } from "../../actions";
import data from "../../data";

const mapState = (state) => ({
  min: 0,
  max: 5,
  titleIncrement: data.counterLabels[1].increment,
  titleDecrement: data.counterLabels[1].decrement,
  labelOne: data.counterLabels[1].labelOne,
  labelTwo: data.counterLabels[1].labelTwo,
  labelledby: "eq3",
  reset: state.resetCounterValues,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onChange: (count) => {
    dispatch(thunks.onHydrogenChange(2 * count, count, "hydrogen"));
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
