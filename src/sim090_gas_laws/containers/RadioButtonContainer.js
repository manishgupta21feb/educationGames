import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import { common, setSelectedOption, setRadioBtnChecked } from "../actions";

import data from "../data";

const mapState = (state) => {
  return {
    radiobuttons:
      state.selectedQuestion.mcqQuestion[state.questionCount - 1].radioButton,
    labelledby: "mcq-question-heading",

    selectedOption: state.getSelectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.submittedAnswer,
  };
};

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(setSelectedOption(id));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
