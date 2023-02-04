import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { common, selectOption } from "../actions";

const mapState = (state) => {
  const radioText = data.answerOptions.map((m) => ({
    text: m.text,
    id: m.id,
  }));

  return {
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled:
      (state.answerAttempted && state.correctAnswer) || state.isVideoEnded,
    radiobuttons: radioText,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectOption(id));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
