import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { thunks } from "../actions";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    text: !state.isSliderDisabled
      ? data.buttonLabels.next
      : data.buttonLabels.finish,
    isPopupActive: !!state.currentPopup.length,
    classes: `toast-secondary-button positive ${
      state.isSliderDisabled ? "" : "right-arrow"
    }`,
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
