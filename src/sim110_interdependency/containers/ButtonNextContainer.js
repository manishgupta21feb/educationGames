import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption, setStatic } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 4;
  return {
    text: finish ? data.buttonLabels.finish : data.buttonLabels.next,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"} `,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(selectAnswerOption(""));

    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Button);
