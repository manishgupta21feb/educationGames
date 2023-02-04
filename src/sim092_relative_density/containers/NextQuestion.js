import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 5;
  const continueButton = state.isBall;

  let check = () => {
    let flag = false;

    for (var i = 0; i < state.sphereData.length; i++) {
      if (state.sphereData[i].visited === false) {
        flag = true;
        break;
      }
    }
    if (flag === false && state.animateEnd === false) {
      return false;
    } else {
      return true;
    }
  };

  return {
    text: finish
      ? data.buttonLabels.finish
      : !continueButton
      ? data.buttonLabels.continue
      : data.buttonLabels.next,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"} `,
    disabled: state.isBall
      ? check()
      : state.fluidPouredCount === 4
      ? false
      : true,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(thunks.onNextButton());
      dispatch(selectAnswerOption(""));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.setResetFocusState(true));
    }, 100);
  },
});

export default connect(mapState, matchDispatch)(Button);
