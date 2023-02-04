import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { thunks } from "../actions";
import EventManager from "../../app/events/manager";
import { questionCount, correctAttempt, common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    text: state.questionCount == 6 ? data.submitAnswer : data.submitAnswer,
    classes:
      state.questionCount == 6
        ? "primary"
        : "primary",
        isPopupActive: !!state.currentPopup.length,

  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Button);
