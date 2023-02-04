import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks, common, setAnswerValue } from "../actions";

const mapState = (state) => {
  return {
    disabled: state.getSubmitButton,
    headingLevel: "3",
    question: "",
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: (item) => {
      dispatch(thunks.submitBtn(item));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
