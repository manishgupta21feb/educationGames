import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const finishNext = state.mcqShow;
  return {
    isPopupActive: !!state.currentPopup.length,
    text: finishNext
      ? state.secondScreen
        ? data.buttonLabels.finish
        : data.buttonLabels.next
      : data.buttonLabels.continue,
    disabled: finishNext
      ? !(state.submitAnswer && state.submitButtonPressed)
      : !(state.showResponse && !state.descriptionBoxShow),
    classes: `toast-secondary-button positive ${
      finishNext && state.secondScreen ? "" : "right-arrow"
    } `,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
  },
});

export default connect(mapState, matchDispatch)(Button);
