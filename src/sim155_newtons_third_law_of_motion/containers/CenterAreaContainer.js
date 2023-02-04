import { connect } from "react-redux";
import CenterArea from "../components/center";
import data from "../data/index";

const mapState = (state) => {
  const leftValue = state.leftCounter + " " + data.label.N;
  const rightValue = state.rightCounter + " " + data.label.N;

  return {
    topHeading: data.topHeading,
    isPopupActive: !!state.currentPopup.length,
    screenData: data.firstSectionScreenData[state.screenCount],
    isMCQ: state.isMCQ,
    correctAttempt: state.correctAnswer,
    leftValue: leftValue,
    rightValue: rightValue,
    animateType: state.animateType,
    leftCounterHead: data.label.leftCounterHead,
    rightCounterHead: data.label.rightCounterHead,
    scale: state.scaleChange,
    animateEnd: state.animateEnd,
  };
};

export default connect(mapState)(CenterArea);
