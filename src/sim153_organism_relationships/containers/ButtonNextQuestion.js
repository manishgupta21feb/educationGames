import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 4;
  return {
    text: finish ? data.buttonLabels.finish : data.buttonLabels.continue,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"} `,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(selectAnswerOption(""));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, matchDispatch)(Button);
