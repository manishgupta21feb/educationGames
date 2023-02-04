import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {

  const { timerStatus } = state;

  return {
    text: data.buttonLabels.next,
    isPopUpOpen: !!state.currentPopup.length,
    classes: "right-arrow toast-secondary-button positive",
    disabled: timerStatus
  }
}

const mapDispatch = (dispatch) => ({
  onClick: () => {
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(thunks.handleNextButtonClick());
      dispatch(common.setResetFocusState(true));
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
