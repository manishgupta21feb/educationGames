import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { thunks } from "../actions";
import EventManager from "../../app/events/manager";

import data from "../data";

const mapState = (state) => {
  const finish = state.questionCount == data.mcqData.length;
  return {
    isPopupActive: !!state.currentPopup.length,
    text: !finish ? data.buttonNext : data.buttonFinish,
    disabled: state.countClick <= 1 || !!state.currentPopup.length,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"}`,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    dispatch(thunks.onNextButton());
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 100);
  },
});

export default connect(mapState, matchDispatch)(Button);
