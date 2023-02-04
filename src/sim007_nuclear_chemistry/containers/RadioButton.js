import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import { common, thunks, setStartAgain } from "../actions";

const mapState = (state) => ({
  resetBtnState: state.resetBtnState,
  selectedOption: state.selectAnswerOption,
  isPopupActive: !!state.currentPopup.length,
  disabled: state.answerSubmitted && state.submittedAnswer,
});

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    // dispatch(setStartAgain(true));
    dispatch(common.toggleToastMessage(false));
    dispatch(thunks.selectAnswerOption(id));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
