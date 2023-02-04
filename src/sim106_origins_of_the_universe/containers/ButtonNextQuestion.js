import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import {
  common,
  thunk,
  selectAnswerOption,
  setQuestion,
  setScreenNumber,
  setIsOptionSelected,
  setIsAnswerCorrect,
} from "../actions/index";

const mapState = (state) => {
  let value = "";
  if (state.questionCount == 2 || state.questionCount == 3) {
    value = data.buttonLabels.continue;
  } else if (state.questionCount == 4) {
    value = data.buttonLabels.finish;
  } else {
    value = data.buttonLabels.next;
  }
  return {
    id: state.getScreenNumber.btn,
    text: value,
    isPopupActive: !!state.currentPopup.length,
    classes:
      state.questionCount == 4
        ? " toast-secondary-button positive"
        : "right-arrow toast-secondary-button positive",
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (getCurrentId) => {
    dispatch(thunk.onNextButton(setQuestion()));
    dispatch(selectAnswerOption(""));
    dispatch(common.toggleToastMessage(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 100);
    dispatch(setIsOptionSelected(true));

    dispatch(setIsAnswerCorrect(false));
    // if (+getCurrentId.target.id + 1 < 5) {
    //   dispatch(
    //     setScreenNumber({ screen: 3, btn: +getCurrentId.target.id + 1 })
    //   );
    // }
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
