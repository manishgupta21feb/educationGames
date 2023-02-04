import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import GraphAreaContainer from "../components/graph/index";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => {
  return {
    currentBarChart1: state.currentBarChart1,
    currentBarChart2: state.currentBarChart2,
    currentLineChart2: state.currentLineChart2,
    currentLineChart1: state.currentLineChart1,
    draggableItems: state.draggableItems,
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    introHeading: data.rightAreaTextDescription,
    questionSet: data.questionSet,
    selectedOptions: state.selectedOptions,
    toastMsg: state.toastMsg,
    getNextQuestion: state.getNextQuestion,
    currentPopup: state.currentPopup,
    questionHeading: data.questionHeading,
    selected: state.selectedTab,
    data: data,
    seasonLabels: state.seasonLabels,
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

export default connect(mapState, mapDispatch)(GraphAreaContainer);
