import { connect } from "react-redux";
import TopAreaComponent from "../components/activity/TopAreaComponent";

import { common, selectQuestion, toggleQuestion } from "../actions";
import data from "../data";

const mapStateToProps = (state) => ({
  questions: state.questionsData,
  showIntroScreen: state.toggleQuestion,
  activeIndex: state.selectQuestionIndex,
  isPopupActive: !!state.currentPopup.length,
  headingLevel1Text:data.headingLevel1Text,
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  setQuestion: (value) => {
    dispatch(selectQuestion(value));
  },
  toggleQuestion: (show) => {
    dispatch(toggleQuestion(show));
    dispatch(common.updateResetBtnState(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  setFocusOnReset: () => {
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TopAreaComponent);
