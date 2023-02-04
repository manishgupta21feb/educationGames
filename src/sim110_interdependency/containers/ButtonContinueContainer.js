import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, setViewFrame } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 4;
  return {
    text: finish ? data.buttonLabels.next : data.buttonLabels.continue,
    classes: `toast-secondary-button positive right-arrow`,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.handleContinue());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Button);
