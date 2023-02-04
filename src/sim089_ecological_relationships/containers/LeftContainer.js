import { connect } from "react-redux";
import { common } from "../actions";
import LeftArea from "../components/ViewArea/LeftArea";

import data from "../data";

const mapState = (state) => {
  const array = state.incorrectAnswer;
  const occurence = data.energyHeading;
  return {
    hintShow: array.filter((x) => x == occurence).length >= 3,
    helpHintContent: data.helpHintContent,
    leftAreaData: data.mcqData,
    imageId: state.updateMcqData[state.setQuestionValue].id,
  };
};
const matchDispatch = (dispatch) => {
  return {
    ariaLiveText: (text) => {
      setTimeout(() => {
        dispatch(common.ariaLiveText(text));
        setTimeout(() => {
          dispatch(common.ariaLiveText(" "));
        }, 400);
      }, 800);
    },
  };
};
export default connect(mapState, matchDispatch)(LeftArea);
