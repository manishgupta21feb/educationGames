import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  text: state.questionCount == 4 ? data.buttonFinish : data.buttonNext,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.handleNextButtonClick());
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(Button);
