import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption, setStatic } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 5;
  return {
    text: finish ? data.buttonLabels.finish : data.buttonLabels.next,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"} `,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(selectAnswerOption(""));

    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("STOP_ALL");
  },
});

export default connect(mapState, matchDispatch)(Button);
