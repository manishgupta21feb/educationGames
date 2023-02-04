import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  text: state.selectQuestionIndex == 2 ? data.buttonFinish : data.buttonNext,
  isPopUpOpen: !!state.currentPopup.length,
  classes: `toast-secondary-button positive ${state.selectQuestionIndex == 2 ?'':'right-arrow'}`,
  activeIndex: state.selectQuestionIndex,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 100);
    dispatch(thunks.onNextButton());
  },
});

export default connect(mapState, mapDispatch)(Button);
