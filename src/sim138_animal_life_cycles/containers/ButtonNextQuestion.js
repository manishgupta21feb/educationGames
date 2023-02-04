import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == data.nuclearData.length;
  return {
    isPopUpOpen: !!state.currentPopup.length,
    text: finish ? data.buttonLabels.finish : data.buttonLabels.next,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"}`,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(thunks.onNextButton());
  },
});

export default connect(mapState, matchDispatch)(Button);
