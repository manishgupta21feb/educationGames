import LeftContainer from "../components/scene2/leftSection";
import { connect } from "react-redux";
import data from "../data";

import { common, thunk, setActivityCompleted } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    activityChange: state.activityChange,
    tabsData: state.section1Data,
    mixAct: state.mixActivation,
    videoData: state.videoData,
    isVideoShowing: state.showVideo,
    activityCompleted: state.getActivityCompleted,
    data,
  };
};

const mapDispatch = (dispatch) => ({
  onVideoShow: (data) => {
    dispatch(thunk.showCaseVideo(data));
  },
  onActivityComplete: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("COMPLETION_SCREEN");
    TincanManager.data.completed = true;
    TincanManager.data.percentage = 100;
    TincanManager.saveTincanData();
  },
  updateActivityCompletion: (data) => {
    dispatch(setActivityCompleted(data));
  },
});

export default connect(mapState, mapDispatch)(LeftContainer);
