import { thunks } from "../actions";
import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    text: data.continueBtnText,
    classes: "right-arrow toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
    disabled: state.continueBtnDisabled,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.continueClick());
  },
});

export default connect(mapState, matchDispatch)(Button);
