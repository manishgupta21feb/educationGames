import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunks } from "../actions";

const mapState = (state) => {
 
  const finish = state.questionCount == 4;
  return {
    text: finish ? data.buttonFinish : data.buttonContinue,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"} `,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.continueButtonClick());

    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(Button);
