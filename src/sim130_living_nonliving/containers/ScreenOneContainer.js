import { connect } from "react-redux";
import { common, thunks } from "../actions";
import ScreenOne from "../components/ScreenOne";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    question: state.selectedQuestion.questionText,
    answerAttempt: state.submitAnswerMcq,
    isPopupActive: !!state.currentPopup.length,
    ifSubScreen: state.subScreen,
    visitedHotSpot: state.visitedHotspotBtn,
    currentHotSpot: state.currentHotSpot,
    showToastMessage: state.showToastMessage,
    imgAlt: data.imgAlt,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("STOP_ALL");
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));

    dispatch(thunks.handleHotClick(id));
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
  },
});

export default connect(mapState, matchDispatch)(ScreenOne);
