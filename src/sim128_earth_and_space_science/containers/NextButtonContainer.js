import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  
  const nextButtonText = state.questionCount == 8 ? data.buttonLabels.finish : data.buttonLabels.next;

  const nextButtonClasses = state.questionCount == 8 ? "toast-secondary-button positive" : "right-arrow toast-secondary-button positive"

  return {
    text: nextButtonText,
    isPopUpOpen: !!state.currentPopup.length,
    classes: nextButtonClasses,
  }
}

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(thunks.handleNextButtonClick());
      dispatch(common.setResetFocusState(true));
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
