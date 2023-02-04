import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  selectAnswerOption,
  removeAllValues,
  setSubmitBtnDisabled,
} from "../actions";
import { toggleToastMessage, common } from "../actions/index.js";

const mapState = (state) => {
  return {
    labelledby: "mcq-question-heading",
    radiobuttons: state.selectedQuestion.radioOptions,
    selectedOption: state.selectedAnswerOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.correctAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(selectAnswerOption(id));
    dispatch(setSubmitBtnDisabled(false));
    dispatch(removeAllValues());
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
