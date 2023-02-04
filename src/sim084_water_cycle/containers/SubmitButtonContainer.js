import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, updateToastMsg } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 4;

  return {
    text: data.buttonLabels.submitAnswer,

    classes: `toast-secondary-button primary`,
    disabled: state.submitButtonState || !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onSubmitButton());

    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, matchDispatch)(Button);
