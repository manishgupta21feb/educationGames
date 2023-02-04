import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, getNextQuestion, thunks } from "../actions";

const mapState = (state) => {
  return {
    text:
      state.getCurrentScreenAndEnvironment.questionNo == 3 &&
      state.setIsVisitedType.length == 6
        ? data.buttonLabels.finish
        : data.buttonLabels.continue,
    classes: `toast-secondary-button positive right-arrow ${
      state.getCurrentScreenAndEnvironment.questionNo == 0 ? "mt-10" : ""
    }`,
    //toast-secondary-button-bottom
    disabled:
      state.getCurrentScreenAndEnvironment.questionNo == 0
        ? false
        : state.getShowContinueButton, //!state.getNextQuestion, // state.toastMsg == "correct" ? false : true,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.nextQuestion());
  },
});

export default connect(mapState, mapDispatch)(Button);
