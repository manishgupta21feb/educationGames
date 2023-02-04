import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { common, selectOption } from "../actions";

const mapState = (state) => {
  return {
    labelledby: "mcq-question-heading",
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.answerAttempted && state.correctAnswer,
    radiobuttons: data.QuestionData[state.questionCount].options,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectOption(id));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
