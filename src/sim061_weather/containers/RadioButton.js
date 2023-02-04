import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import { thunks } from "../actions";

import data from "../data";

const mapState = (state) => {
  return {
    radiobuttons: data.radioButtons,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    labelledby: "mcq-question-heading",
  };
};
const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.selectedAnswer(id));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
