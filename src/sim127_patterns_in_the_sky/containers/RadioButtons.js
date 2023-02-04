import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  labelledby: "mcq-question-heading",
  selectedOption: state.mcqAnswerOption,
  radiobuttons: data.screen2MCQAnswerOptions,
  isPopupActive: !!state.currentPopup.length,
  disabled: !!state.currentPopup.length || state.questionAnswered,
});

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("PRIMARY_CLICK");
    }, 100);
    dispatch(thunks.selectMCQAnswerOption(id));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
