import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightArea from "../components/Right";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => {
  const questionHeading = data.questionHeading
    .replace("-1-", state.updateHeadingValue)
    .replace("-2-", data.questionSet.length);

  return {
    draggableItems: state.draggableItems,
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    introHeading: data.rightAreaTextDescription,
    questionSet: data.questionSet,
    selectedOptions: state.selectedOptions,
    toastMsg: state.toastMsg,
    getNextQuestion: state.getNextQuestion,
    currentPopup: state.currentPopup,
    questionHeading: questionHeading,
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
