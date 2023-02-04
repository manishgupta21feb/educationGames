import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import { thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  const heading = state.secondScreen
    ? null
    : data.questionHeading
        .replace("-1-", state.questionCountValue)
        .replace("-2-", data.mcqData.length);

  return {
    heading,

    headingLevel: "2",
    buttonText: state.secondScreen
      ? data.buttonCheck
      : data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    question: state.secondScreen
      ? data.secondScreenData[state.setQuestionValue].question
      : data.mcqData[state.setQuestionValue].question,
    disabled:
      state.currentPopup.length || state.secondScreen
        ? state.dropDownOne.value == null ||
          state.dropDownTwo.value == null ||
          state.dropDownThree.value == null
        : !state.selectedHotspot || state.submitAnswer,
  };
};
const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.mcqButtonClicked());
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};
export default connect(mapState, matchDispatch)(MCQArea);
