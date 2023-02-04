import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == data.equationsData.length;
  return {
    isPopUpOpen: !!state.currentPopup.length,
    text: finish ? data.buttonLabels.finish : data.buttonLabels.next,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"}`,
    disabled: state.isNextButtonEnable|| state.selectedAnswerOption,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(thunks.onNextButton());
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.setResetFocusState(true));
    // EventManager.broadcast("STOP_ALL");
  },
});

export default connect(mapState, matchDispatch)(Button);
