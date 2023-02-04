import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  text: data.continueButtonLabel,
  classes: "toast-secondary-button positive right-arrow",
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onContinueButton());
  },
});

export default connect(mapState, mapDispatch)(Button);
