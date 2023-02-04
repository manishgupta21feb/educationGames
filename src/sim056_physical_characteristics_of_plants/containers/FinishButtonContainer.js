import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, getNextQuestion, thunks } from "../actions";

const mapState = (state) => {
  return {
    text:
      state.selectedOptions.length == 6
        ? data.buttonLabels.finish
        : data.buttonLabels.next,
    classes: `toast-secondary-button positive ${
      state.selectedOptions.length != 6 ? "right-arrow" : ""
    }`,
    disabled: !state.getNextQuestion, // state.toastMsg == "correct" ? false : true,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.nextQuestion());
  },
});

export default connect(mapState, mapDispatch)(Button);
