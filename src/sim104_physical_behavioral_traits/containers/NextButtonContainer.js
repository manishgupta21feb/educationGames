import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  let btnText = state.visitedPage.length == 2 && state.count == 8;
  return {
    text: btnText ? data.buttonLabels.finish : data.buttonLabels.next,
    classes: `toast-secondary-button positive ${btnText ? "" : "right-arrow"}`,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    dispatch(thunks.onNextButton());

    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
  },
});

export default connect(mapState, matchDispatch)(Button);
