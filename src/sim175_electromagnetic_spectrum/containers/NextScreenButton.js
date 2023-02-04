import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const check = state.mcq1.length == 0;
  return {
    text: check ? data.buttonNext : data.buttonContinue,
    isPopupActive: !!state.currentPopup.length,
    classes: "toast-secondary-button positive right-arrow",
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.moveToNextQuestion());
  },
});

export default connect(mapState, matchDispatch)(Button);
