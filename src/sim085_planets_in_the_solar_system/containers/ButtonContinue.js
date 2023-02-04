import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount > data.typingPlanet.length;

  return {
    isPopupActive: !!state.currentPopup.length,
    text: !finish ? data.bottonCheck : data.buttonFinish,
    disabled: !finish
      ? !(state.clickedButtonValue && state.inputFeildValue)
      : null,

    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"}`,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onCheckButton());
  },
});

export default connect(mapState, matchDispatch)(Button);
