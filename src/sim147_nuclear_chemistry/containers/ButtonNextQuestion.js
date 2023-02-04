import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data";
import { common, thunks, selectAnswerOption } from "../actions";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
  text:
    state.questionCount == 5
      ? data.buttonLabels.finish
      : data.buttonLabels.continue,
  classes:
    state.questionCount == 5
      ? " toast-secondary-button positive"
      : "right-arrow toast-secondary-button positive",
  //disabled:state.isVideoEnded?false:true
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(selectAnswerOption(""));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
