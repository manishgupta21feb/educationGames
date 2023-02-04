import { connect } from "react-redux";
import Select from "../../app/components/Select";
import { common, selectOptionSecond } from "../actions";
import data from "../data";

const mapState = (state) => {
  const disabledDrpDwn = state.correctAnswer || state.correctAnswerTwo;
  return {
    options: state.questionData.options2,
    value: state.selectedOptionSecond,
    disabled: state.correctAnswer || state.correctAnswerTwo,
    isPopupActive: !!state.currentPopup.length,
    defaultText: "",
    classes:
      !disabledDrpDwn && !state.correctAnswerTwo && state.answerAttempted
        ? "incorrect"
        : "",
    defaultAlt: data.blank2,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(selectOptionSecond(item));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
