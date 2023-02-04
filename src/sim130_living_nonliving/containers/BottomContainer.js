import { connect } from "react-redux";
import TopBottom from "../components/Bottom";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 5;

  return {
    data: data,
    screenOneTxt: data.screenOneTxt,
    ifSubScreen: state.subScreen,
    isPopupActive: !!state.currentPopup.length,
    answerAttempt: state.submitAnswerMcq,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(TopBottom);
