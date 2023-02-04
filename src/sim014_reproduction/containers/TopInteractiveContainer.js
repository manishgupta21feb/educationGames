import { connect } from "react-redux";
import TopInteractive from "../components/TopSection/TopInteractive";

import data from "../data/index";
import { thunks, common, toggleQuestion, selectQuestion } from "../actions";

const mapState = (state) => ({
  selectedLabel: data.selected,
  questions: data.hotspotData,
  startActivity: state.startActivity,
  selectedQuestion: state.selectedQuestion,
  isPopupActive: !!state.currentPopup.length,
  activeIndex: state.selectQuestionIndex,
  showIntroScreen: state.toggleQuestion,
  selectedHotspot: state.selectedHotspot,
  selectedButton: state.selectedButton,
  question: data.mcqData,
  visitedHotspots: state.visitedHotspots,
  nextButtonClickedState: state.nextButtonClickedState,
  jumpToMCQScreenState: state.jumpToMCQScreenState,
});

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
  onClick: (id, selectedState) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    setTimeout(() => {
      dispatch(thunks.selectHotspot(id, selectedState));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(TopInteractive);
