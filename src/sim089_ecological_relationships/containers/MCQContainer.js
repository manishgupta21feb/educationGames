import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import { thunks, common, questionCount } from "../actions";
import data from "../data";

const mapState = (state) => {
  const heading = data.questionHeading
    .replace("-1-", state.questionCountValue)
    .replace("-2-", data.mcqData.length);
  return {
    heading,

    headingLevel: "2",
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    question: data.mcqQuestionHeading,
    disabled:
      state.currentPopup.length ||
      state.setLivingOrganismValue.value == null ||
      state.setClassifyValue.value == null ||
      state.setEnergyValue.value == null ||
      state.submitAnswer,
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
