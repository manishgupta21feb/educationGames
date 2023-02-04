import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    text:
      state.screenCount == 3 && !state.isMCQ
        ? data.buttonNext
        : state.questionCount == 3
        ? data.buttonFinish
        : data.buttonContinue,
    isPopUpOpen: !!state.currentPopup.length,
    disabled:
      state.screenCount == 3 ? !state.nextButton || state.animateEnd : false,
    classes:
      state.questionCount == 3
        ? "toast-secondary-button positive"
        : "right-arrow toast-secondary-button positive",
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
      dispatch(thunks.nextButtonClick());
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
