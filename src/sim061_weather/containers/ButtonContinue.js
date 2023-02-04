import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const finish = state.showFinishButton.length == data.buttonLabels.length;
  return {
    hideTooltip: true,
    isPopupActive: !!state.currentPopup.length,
    text: !finish ? data.buttonContinue : data.buttonFinish,
    disabled: state.countClick <= 1,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"}`,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
  },
});

export default connect(mapState, matchDispatch)(Button);
