import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data";
import { common, thunks, selectAnswerOption } from "../actions";

const mapState = (state) => ({
  text:
    state.questionCount == 10
      ? data.buttonLabels.finish
      : data.buttonLabels.next,
  classes:
    state.questionCount == 10
      ? " toast-secondary-button positive"
      : "right-arrow toast-secondary-button positive",
  disabled: state.isVideoEnded ? false : true,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(selectAnswerOption(""));
    dispatch(common.toggleToastMessage(false));
    dispatch(thunks.initLiveText());
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
