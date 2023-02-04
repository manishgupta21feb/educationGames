import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunks, common, selectOption } from "../actions";

const mapState = (state) => {
  const radiobuttons = data.mcqOptions.map((m) => ({
    text: m,
    id: m,
  }));

  const radioText = data.mainMCQOptions.map((m) => ({
    text: m,
    id: m,
  }));

  return {
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.answerAttempted && state.correctAnswer,
    radiobuttons: state.selectedHotspot > 0 ? radioText : radiobuttons,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "PRIMARY_CLICK" });
    dispatch(selectOption(id));
    dispatch(thunks.markAudioPaused());
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
