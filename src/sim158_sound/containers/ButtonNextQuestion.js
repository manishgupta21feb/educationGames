import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  text: state.selectQuestionIndex == 4 ? data.buttonLabels.finish : data.buttonLabels.continue,
  isPopUpOpen: !!state.currentPopup.length,
  classes: `toast-secondary-button positive right-arrow continueButton`,
  activeIndex: state.selectQuestionIndex,
  
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 100);
    dispatch(thunks.videoContinuePressed());
  },
});

export default connect(mapState, mapDispatch)(Button);
