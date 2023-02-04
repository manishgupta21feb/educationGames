import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunks, common } from "../actions";
const mapState = (state) => {
  const totalQuestion =
    data.Questions[state.toggleQuestion].questions.length - 1;
  const nextSection = totalQuestion == state.questionCount;
  const finish = nextSection && state.visitedHotspots.length == 3;
  return {
    text: finish
      ? data.buttonFinish
      : nextSection
      ? data.buttonNext
      : data.buttonContinue,
    isPopUpOpen: !!state.currentPopup.length,
    classes: finish
      ? "toast-secondary-button positive"
      : "right-arrow toast-secondary-button positive",
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
      dispatch(thunks.handleNextButtonClick());
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
