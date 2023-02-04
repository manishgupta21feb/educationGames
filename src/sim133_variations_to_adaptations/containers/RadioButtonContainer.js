import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import { common, setSelectedOption, setSubmitBtnVisibility } from "../actions";

import data from "../data";

const mapState = (state) => {
  const screen = state.screen;
  return {
    radiobuttons:
      screen === "first"
        ? data.assessmentRadioButtons
        : data.secondScreenRadioButtons,
    labelledby: "mcq-question-heading",
    selectedOption: state.getSelectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.getAnswer,
  };
};

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(setSelectedOption(id));
    dispatch(setSubmitBtnVisibility(true));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
