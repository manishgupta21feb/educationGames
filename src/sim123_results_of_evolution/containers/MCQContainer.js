import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import { thunks, common, questionCount } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    headingLevel: "2",
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    question: data.rightScreenData[state.setScreenValue].question,
    disabled:
      state.currentPopup.length ||
      !state.selectedAnswerOption ||
      (state.submitAnswer && state.submitButtonPressed),
  };
};
const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.onSubmitButton());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};
export default connect(mapState, matchDispatch)(MCQArea);
