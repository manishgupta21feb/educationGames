import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, setSubmitBtnVisibility } from "../actions";

const mapState = (state) => {
  const disable =
    Object.values(state.counters).some((v) => v > 1) &&
    !state.getSubmitBtnVisibility;

  return {
    headingLevel: "2",
    disabled: !disable,
    subheadingLevel: "3",
    buttonText: data.submitAnswer,
    heading: data.mainScreenText,
    question: data.questionHeading
      .replace("-1-", state.questionCount)
      .replace("-2-", data.equations.length),
    isPopupActive: !!state.currentPopup.length,
  };
};
const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(setSubmitBtnVisibility(true));
    dispatch(thunks.submitAnswer());
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
