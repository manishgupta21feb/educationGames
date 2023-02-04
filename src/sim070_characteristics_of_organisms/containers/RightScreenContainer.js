import { connect } from "react-redux";
import RightScreen from "../components/ActivityScreen/RightScreen";
import data from "../data";
const mapState = (state) => {
  return {
    heading: data.screenHeading,
    specimenClicked: state.specimenClicked,
    isClicked: state.microscopicClickView,
    mcqView: state.isMcqShow,
    answerAttempt: state.submitAnswer,
    submitButtonPressed: state.submitButtonPressed,
    isPopupActive: !!state.currentPopup.length,
  };
};
export default connect(mapState)(RightScreen);
