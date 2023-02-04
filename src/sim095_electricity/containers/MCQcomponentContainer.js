import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    hideTooltip: true,
    headingLevel: "2",
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    question: state.selectedQuestion.text,
    disabled: state.submitBtnDisabled,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.submitAnswerMcq());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
