import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunks, setRadioOption } from "../actions";

const mapState = (state) => {
  return {
    groupIdentifier: "group2",
    labelledby: "mcq-question-heading",
    radiobuttons: state.selectedTrait[0].radioOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.radioOption,
    disabled: state.correctAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(setRadioOption(id));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
