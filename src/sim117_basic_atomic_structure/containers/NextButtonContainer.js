import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption, setStatic } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    text:
      state.questionsData.length > 0
        ? data.buttonLabels.next
        : data.buttonLabels.finish,
    classes: `toast-secondary-button positive ${
      state.questionsData.length > 0 ? "right-arrow" : ""
    } `,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    dispatch(thunks.onNext());
  },
});

export default connect(mapState, matchDispatch)(Button);
