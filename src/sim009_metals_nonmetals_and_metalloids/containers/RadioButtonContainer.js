import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { common, selectAnswerOption } from "../actions";

const mapState = (state) => {
  return {
    radiobuttons: data.answerOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectAnswerOption,
    disabled: state.answerSubmitted && state.correctAnswer,
    resetBtnState: state.resetBtnState,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectAnswerOption(id));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
