import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    classes: `primary`,
    text: data.submitAnswer,
    disabled:
      !state.selectedResourceType ||
      !!state.currentPopup.length ||
      state.correctAnswerSubmitted,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.submitAnswer());
  },
});

export default connect(mapState, matchDispatch)(Button);
