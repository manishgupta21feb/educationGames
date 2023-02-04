import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import data from "../data";
import { selectOption } from "../actions/activity";
import { toggleToastMessage } from "../actions/index.js";

const mapState = (state) => {
  const radiobuttons = data.mcqOptions.map((m) => ({
    text: m,
    id: m.toLowerCase(),
  }));

  return {
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.answerAttempted && state.correctAnswer,
    radiobuttons,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectOption(id));
    dispatch(toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
