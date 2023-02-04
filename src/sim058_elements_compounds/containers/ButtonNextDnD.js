import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption, setStatic } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    text: data.buttonLabels.next,
    classes: `toast-secondary-button positive right-arrow `,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(selectAnswerOption(""));

    dispatch(common.togglePopup(5));
    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    });
  },
});

export default connect(mapState, matchDispatch)(Button);
