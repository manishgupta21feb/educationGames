import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { toggleToastMessage } from "../actions";
import { thunk, setResetDisable } from "../actions/activity";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  let buttonText = "";
  if (state.tripCount <= 5) {
    if (!state.animationState) {
      buttonText = data.buttonPlay.replace("-1-", state.tripCount);
    } else {
      buttonText = data.buttonPlayProgress.replace("-1-", state.tripCount);
    }
  } else {
    buttonText = data.buttonCompleted;
  }
  return {
    buttonText,
    question: data.controlsHeading,
    disabled:
      state.tripCount > 5 || state.animationState || state.currentPopup.length,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.playAnimation());
    dispatch(setResetDisable(false));
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
