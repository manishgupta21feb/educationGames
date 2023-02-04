import { connect } from "react-redux";
import { common, thunks, wrongAnswer } from "../actions";
import ScreenOne from "../components/ScreenOne";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    question: state.selectedQuestion.questionText,
    viewFrame: state.viewFrame,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(wrongAnswer(false));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(thunks.handleHotClick(id));
    });
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, matchDispatch)(ScreenOne);
