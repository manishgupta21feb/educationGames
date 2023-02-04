import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { thunks } from "../actions";
import EventManager from "../../app/events/manager";

import data from "../data";

const mapState = (state) => {
  const datavalue = state.secondScreenValue
    ? data.draggableItemsScreen2
    : data.draggableItemsScreen1;

  const nextFinish = state.scenerioVisitedValue > 0;
  return {
    isPopupActive: !!state.currentPopup.length,
    text: state.secondScreenValue
      ? nextFinish
        ? data.buttonLabels.finish
        : data.buttonLabels.continue
      : nextFinish
      ? data.buttonLabels.next
      : data.buttonLabels.continue,

    classes: `toast-secondary-button positive ${
      state.secondScreenValue && nextFinish ? "" : "right-arrow"
    }`,

    disabled:
      state.matchedItems.length !=
      datavalue[state.scenerioVisitedValue].dragItem.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    dispatch(thunks.onNextButton());

    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 100);
  },
});

export default connect(mapState, matchDispatch)(Button);
