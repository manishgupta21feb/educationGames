import { connect } from "react-redux";
import { attemptedButton, thunks } from "../actions";
import RightScreen from "../components/ActivityScreen/RightScreen";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    mcqView: state.isMcqShow,
    knobsHidden: state.knobsHidden,
    screenNumber: state.screenNumber,
    answerAttempt: state.submitAnswer,
    visitedButton: state.visitedButton,
    isClicked: state.microscopicClickView,
    specimenClicked: state.specimenClicked,
    isPopupActive: !!state.currentPopup.length,
    submitButtonPressed: state.submitButtonPressed,
    heading: data.ostData.filter((q) => q.id == state.ostCountNumber)[0].text,
  };
};

const mapDispatch = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(attemptedButton(id));
      dispatch(thunks.onMagnificationClick());
      EventManager.broadcast("SECONDARY_CLICK");
    },
  };
};
export default connect(mapState, mapDispatch)(RightScreen);
