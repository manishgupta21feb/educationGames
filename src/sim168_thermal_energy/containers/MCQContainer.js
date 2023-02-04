import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const { mcqAnswer, currentPopup, questionAnswered } = state;
  const disabled = !!currentPopup.length || !mcqAnswer || questionAnswered;
  return {
    disabled: disabled,
    buttonText: data.submitAnswer,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.submitMCQAnswer());
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
