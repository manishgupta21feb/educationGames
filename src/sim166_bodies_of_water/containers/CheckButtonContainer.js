import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks, common, checkButtonPressed } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 5;
  return {
    text: state.showStatic ? data.buttonLabels.finish : data.check,
    classes: state.showStatic
      ? "toast-secondary-button positive"
      : "right-arrow toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
    disabled: state.matchedItems.length == 6 ? false : true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(true));
    dispatch(thunks.checkButtonPressed());
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
