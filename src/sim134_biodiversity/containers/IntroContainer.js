import { connect } from "react-redux";
import Intro from "../components/locations/lowerSection/introContent";
import EventManager from "../../app/events/manager";

import { common, questionState, answerSubmitted } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onQuestionState: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(questionState(true));
    dispatch(answerSubmitted(""));
  },
  onSetReset: () => {
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, matchDispatch)(Intro);
