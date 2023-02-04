import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import data from "../data";
// import {  setStartAgain } from "../actions";
import { thunk, common, selectAnswerOption } from "../actions/activity";

const mapState = (state) => {
  return {
    radiobuttons: data.answerOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.submitAnswer,
    labelledby: "mcq-question-heading",
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(selectAnswerOption(id));
    dispatch(common.updateResetBtnState(false));
    // dispatch(setStartAgain(true));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
