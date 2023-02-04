import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk, common, setAnswerValue } from "../actions";

const mapState = (state) => {
  const disabled =
    state.getAnswerValue.reactions != "" &&
    state.getAnswerValue.signs != "" &&
    state.getAnswerValue._h != "" &&
    state.getAnswerValue.energy != "";

  let status = state.getAnswerValue.isSubmitBtnClicked;
  return {
    disabled: status ? status : !disabled,
    headingLevel: "3",
    question: data.reactionTypeQuestion.heading,
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    questionLabel: data.reactionTypeQuestion.ariaLabel,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.submitAnswer());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
