import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  let { text, generation } = state.getQuestionSet;
  return {
    buttonText:
      generation == 2 ? data.question_button[1] : data.question_button[0],
    question: text,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.addMateButtons || !!state.currentPopup.length,
    ariahidden: !!state.currentPopup.length,
    headingLevel: "2",
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.onSubmit());
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
