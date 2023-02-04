import { connect } from "react-redux";
import BottomArea from "../components/ThirdScreen/BottomArea";
import data from "../data";
const mapState = (state) => {
  return {
   
    commonHeadingText: data.commonText,
    answerAttempt: state.submitAnswer,
    submitButtonPressed: state.submitButtonPressed,
  };
};

export default connect(mapState)(BottomArea);
