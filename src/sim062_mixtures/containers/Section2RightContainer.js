import RightContainer from "../components/scene2/rightSection";
import { connect } from "react-redux";
import { isAndroid, isMacOs } from "react-device-detect";
import { thunks } from "../../app/actions";
import data from "../data";

import {
  section1Data,
  mixActivation,
  showVideo,
  videoDataList,
  common,
} from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    activityChange: state.activityChange,
    tabsData: state.section1Data,
    videoData: state.videoData,
    isVideoShowing: state.showVideo,
    resetBtnState: state.resetBtnState,
    currentPopup: state.currentPopup,
    activityCompleted: state.getActivityCompleted,
    data,
  };
};

const mapDispatch = (dispatch) => ({
  onSectionDataUpdate: (data) => {
    dispatch(section1Data(data));
  },
  onMixUpdate: (data) => {
    dispatch(mixActivation(data));
  },
  onVideoCompletion: () => {
    dispatch(showVideo(false));
  },
  onVideoViewed: (data) => {
    dispatch(videoDataList(data));
  },
  announceAriaLive: (data) => {
    if (isAndroid || isMacOs) {
      setTimeout(() => {
        dispatch(thunks.ariaLiveAssertive(data));
      }, 500);
    } else {
      dispatch(thunks.ariaLiveAssertive(data));
    }
  },
});

export default connect(mapState, mapDispatch)(RightContainer);
