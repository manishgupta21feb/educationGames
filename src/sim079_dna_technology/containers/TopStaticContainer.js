import { connect } from "react-redux";
import TopStatic from "../components/TopSection/TopStatic";

import data from "../data/index";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  heading: data.mainHeading,
  selectedLabel: data.selected,
  questions: data.hotspotData,
  startActivity: state.startActivity,
  isPopupActive: !!state.currentPopup.length,
  selectedHotspot: state.selectedHotspot,
  selectedButton: state.selectedButton,
  question: data.mcqData,
  visitedHotspots: state.visitedHotspots,
  nextButtonClickedState: state.nextButtonClickedState,
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

export default connect(mapState, mapDispatch)(TopStatic);
