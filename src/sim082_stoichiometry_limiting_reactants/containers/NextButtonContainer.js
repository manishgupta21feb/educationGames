import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  text: state.questionCount == 6 ? data.buttonLabels.finish : data.buttonLabels.next,
  isPopUpOpen: !!state.currentPopup.length,
  classes: state.questionCount == 6 ? "toast-secondary-button positive" : "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    setTimeout(() => {
      dispatch(thunks.handleNextButtonClick());
      dispatch(common.setResetFocusState(true));
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
