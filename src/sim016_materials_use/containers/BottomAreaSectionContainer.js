import { connect } from "react-redux";
import BottomArea from "../components/BottomArea/BottomSection";
import data from "../data";

const mapState = (state) => ({
  introductionText: data.introduction.screenFirstText,
  secondaryIntroText: data.introduction.screenSecondText,
  showContinueButton: state.toggleContinue,
  showNextButton: state.toggleNext,
  audioStatePlay: state.audioStatePlay,
  showSecondryText: state.showPrimaryText,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomArea);
