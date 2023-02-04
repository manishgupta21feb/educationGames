import { connect } from "react-redux";
import TopInteractive from "../components/TopSection/TopInteractive";

import data from "../data/index";
import {
  thunks,
  common,
  toggleQuestion,
  startSimulation,
  videoComp,
  isVideoEnded,
} from "../actions";

const mapState = (state) => ({
  selectedLabel: data.selected,
  questions: data.hotspotData,
  isPopupActive: !!state.currentPopup.length,
  selectedHotspot: state.selectedHotspot,
  selectedButton: state.selectedButton,
  visitedHotspots: state.visitedHotspots,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(toggleQuestion(id));
    dispatch(startSimulation(false));
    if (id == 2) {
      dispatch(videoComp(false));
      dispatch(isVideoEnded(true));
      dispatch(thunks.setVideoLiveText());
    }
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(thunks.selectHotspot(id));
  },
});

export default connect(mapState, mapDispatch)(TopInteractive);
