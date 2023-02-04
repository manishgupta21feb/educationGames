import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import {
  common,
  selectedAnswer,
  setSelectedOption,
  setIsOptionSelected,
} from "../actions";

import data from "../data";

const mapState = (state) => {
  return {
    radiobuttons: data.answerOptions,
    labelledby: "mcq-question-heading",
    isPopupActive: !!state.currentPopup.length,
    disabled: state.getRadioBtnChecked,
    selectedOption: state.getSelectedOption,
  };
};
const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(setIsOptionSelected(false));
    dispatch(setSelectedOption(id));
  },
});
export default connect(mapState, mapDispatch)(RadioButton);
