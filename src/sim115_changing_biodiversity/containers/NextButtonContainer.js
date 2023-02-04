import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { thunk, common } from "../actions";
import data from "../data";
const mapState = (state) => {
  return {
    text:
      state.questionCount == 2 && state.correctAnswer
        ? data.finish
        : state.visitedHotspots.length == 3
        ? data.next
        : data.continue,
    isPopUpOpen: !!state.currentPopup.length,
    classes:
      state.questionCount == 2 && state.correctAnswer
        ? "toast-secondary-button positive"
        : "right-arrow toast-secondary-button positive",
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
      dispatch(thunk.handleNextButtonClick());
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
