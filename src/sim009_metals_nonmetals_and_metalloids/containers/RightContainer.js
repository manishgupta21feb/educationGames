import { connect } from "react-redux";
import QuestionArea from "../components/Screens/Screen1/Mcq/QuestionArea";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => ({
  currentPopup: state.currentPopup,
  currentScreen: state.currentScreen,
  correctAnswer: state.correctAnswer,
  answerSubmitted: state.answerSubmitted,
  isPopupActive: !!state.currentPopup.length,
  helpingText: data.globalUsedText.helpingButton,
});

const mapDispatch = (dispatch) => ({
  togglePopup: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
    dispatch(common.togglePopup(2));
  },
});

export default connect(mapState, mapDispatch)(QuestionArea);
