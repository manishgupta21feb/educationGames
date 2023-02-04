import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => {
  const disabled =
    state.protons.value == null ||
    state.electrons.value == null ||
    state.elementName.value == null ||
    state.massNumber.value == null ||
    state.submitAnswer;
  return {
    disabled,
    headingLevel: "2",
    question: data.reactionTypeQuestion,
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
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
