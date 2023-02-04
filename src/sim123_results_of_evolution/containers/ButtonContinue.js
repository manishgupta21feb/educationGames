import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const finish = state.scenerioCountValue == data.rightScreenData.length;

  return {
    isPopupActive: !!state.currentPopup.length,
    text: !finish ? data.buttonLabels.continue : data.buttonLabels.finish,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"}`,
    disabled: state.mcqScreenValue
      ? !state.submitAnswer
      : state.buttonClickCount != 2,
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
