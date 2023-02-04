import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import BarGraph from "../components/graph/barGraph";
import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    introHeading: data.rightAreaTextDescription,
    questionSet: data.questionSet,
    selectedOptions: state.selectedOptions,
    getNextQuestion: state.getNextQuestion,
    currentPopup: state.currentPopup,
    questionHeading: data.questionHeading,
    selected: state.selectedTab,
    patterns: data.patterns,
    selectedTab: state.selectedTab,
    globalData: data,
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

export default connect(mapState, mapDispatch)(BarGraph);
