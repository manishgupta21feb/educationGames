import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 5;
  return {
    text: "Submit",
    classes: "primary",
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
