import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption, setStatic } from "../actions";

const mapState = (state) => {
  return {
    text: data.continueButton,
    classes: `toast-secondary-button static-btn positive right-arrow `,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onContinueButton());

    dispatch(selectAnswerOption(""));

    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    });
    EventManager.broadcast("STOP_ALL");
  },
});

export default connect(mapState, matchDispatch)(Button);
