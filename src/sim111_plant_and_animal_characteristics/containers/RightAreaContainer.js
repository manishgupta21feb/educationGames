import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightArea from "../components/Right";

import data from "../data/index";
import { common, setPreviousSound } from "../actions";

const mapState = (state) => {
  return {
    // draggableItems: state.draggableItems,
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    monekyDiscription: data.monekyDiscription,
    treeDiscription: data.treeDiscription,
    isSecondScreenEnable: state.isSecondScreenEnable,
    firstActivityCompleted: state.firstActivityCompleted,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.togglePopup(3));
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(RightArea);
