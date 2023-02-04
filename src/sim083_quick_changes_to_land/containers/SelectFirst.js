import { connect } from "react-redux";
import Select from "../../app/components/Select";
import { selectOption, common } from "../actions";
import data from "../data";

const mapState = (state) => {
  const disabledDrpDwn = state.correctAnswer || state.correctAnswerOne;
  const isSecondOption = state.questionData.options2.length > 0;
  return {
    options: state.questionData.options1,
    value: state.selectedOption,
    disabled: state.correctAnswer || state.correctAnswerOne,
    isPopupActive: !!state.currentPopup.length,
    defaultText: "",
    classes:
      !disabledDrpDwn && !state.correctAnswerOne && state.answerAttempted
        ? "incorrect"
        : "",
    defaultAlt: isSecondOption ? data.blank1 : data.blank,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(selectOption({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
