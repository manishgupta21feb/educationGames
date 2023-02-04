import { thunks } from "../actions";
import { connect } from "react-redux";
// import Button from "../../app/components/Button";
import data from "../data/data.en";
import ContinueButtonComponent from "../components/FullViewComponent/ContinueButtonComponent";

const mapState = (state) => {
  const disable = state.visitedButtons.length == 13;
  return {
    text: data.buttonLabels.continue,
    classes: "right-arrow toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
    disabled: disable == true ? false : true,
    focusOnButton: disable,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.continueClick());
  },
});

export default connect(mapState, matchDispatch)(ContinueButtonComponent);
