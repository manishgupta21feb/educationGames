import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    radiobuttons:
      state.selectedQuestion <= 8 ? data.mcqOptions : data.mcqOptions2,
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.answerAttempted && state.correctAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(thunks.selectOption(id));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
