import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  const questionNumber = state.getQuestionNumber;
  return {
    dialogType: "positive",
    id: "6",
    buttonClasses: questionNumber < 2 ? "right-arrow" : "",
    buttonContinueText:
      questionNumber < 2
        ? data.buttonLabels.continue
        : data.buttonLabels.finish,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.onClickNext());
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
