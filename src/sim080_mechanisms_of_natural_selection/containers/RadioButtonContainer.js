import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  let { radioOptions } = state.getQuestionSet;
  return {
    groupIdentifier: "group2",
    labelledby: "mcq-question-heading",
    radiobuttons: radioOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedOptions.id,
    disabled: state.isRadioButtonDisable || !!state.currentPopup.length, //state.showNextBtn || state.disableLonePairRadio,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(thunks.onRadioClick(id));
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
