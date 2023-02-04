import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import data from "../data";
import { selectOption, removeAllValues } from "../actions";
import { toggleToastMessage, common } from "../actions/index.js";

const mapState = (state) => {
  return {
    labelledby: "mainScreenText",
    radiobuttons: data.mcqOptions,
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.answerAttempted && state.correctAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(selectOption(id));
    dispatch(removeAllValues());
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
