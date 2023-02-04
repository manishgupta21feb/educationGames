import { connect } from "react-redux";
import TopInteractive from "../components/FirstScreen/TopInteractive";

import data from "../data/index";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    lowTideText:data.lowTideText,
    highTideText:data.highTideText,
    moonText:data.moonText,
sunText:data.sunText,
earthText:data.earthText,
    question: data.secondScreenText,
    selectedLabel: data.selected,
    questions: data.hotspotData,
    startActivity: state.startActivity,
    hotspotData: data.hotspotData,
    isPopupActive: !!state.currentPopup.length,
    selectedHotspot: state.selectedHotspot,
    selectedButton: state.selectedButton,
    visitedHotspots: state.visitedHotspots,
    nextButtonClickedState: state.nextButtonClickedState,
    jumpToMCQScreenState: state.jumpToMCQScreenState,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  setQuestion: (value) => {
    dispatch(selectQuestion(value));
  },
  toggleQuestion: (show) => {
    dispatch(toggleQuestion(show));
  },

  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(thunks.selectHotspot(id));
    }, 200);
  },
});

export default connect(mapState, mapDispatch)(TopInteractive);
