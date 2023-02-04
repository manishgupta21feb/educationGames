import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import { common, selectedAnswer } from "../actions";

import data from "../data";

const mapState = (state) => {
  return {
    radiobuttons: data.radioButtons,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.submitAnswer || state.isSliderDisabled,
  };
};
const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(selectedAnswer(id));
  },
});
export default connect(mapState, mapDispatch)(RadioButton);
