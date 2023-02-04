import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightArea from "../components/RightView/Draggable.js";

import data from "../data/index";
import {
  common,
  setDraggableValue,
  thunks,
  updateAccessibleList,
  setzindexStatus,
} from "../actions";

const mapState = (state) => {
  return {
    buttonLabels: !state.hideCheckButton
      ? data.buttonLabels.check
      : state.sim145CurrentScreen === "fifth" &&
        state.lastScreenPart === "first"
      ? data.buttonLabels.continue
      : data.buttonLabels.next,
    data: data,
    OST:
      state.sim145CurrentScreen === "second"
        ? data.secondScreenRightOST
        : state.sim145CurrentScreen === "third"
        ? data.thirdScreenRightOST
        : data.fifthScreenRightOST,
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    matchedItems: state.matchedItems,
    selectAnswerOption: state.selectAnswerOption,
    setDraggable: state.setDraggable,
    hideCheckButton: state.hideCheckButton,
    currentScreen: state.sim145CurrentScreen,
    lastScreenPart: state.lastScreenPart,
  };
};
const mapDispatch = (dispatch) => ({
  updateAccessibleList: (val) => {
    dispatch(updateAccessibleList(val));
  },
  setDraggableValue: (item) => {
    dispatch(setDraggableValue(item));
  },
  onCheck: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.onCheck());
  },
  nextOnClick: () => {
    dispatch(thunks.nextOnClick());
    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
  codonChartPopup: () => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  fifthScreenOnContinue: () => {
    dispatch(common.setResetFocusState(true));
    dispatch(thunks.fifthScreenOnContinue());
  },

  setzindexStatus: (status) => {
    dispatch(setzindexStatus(status));
  },
});

export default connect(mapState, mapDispatch)(RightArea);
