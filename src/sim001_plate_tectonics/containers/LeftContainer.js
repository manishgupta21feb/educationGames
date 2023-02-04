import { connect } from "react-redux";
import LeftComponent from "../components/activity/Left";

import { common, thunks, updateCanvasData } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    scale: state.scaleChange,
    canvasData: state.canvasData,
    mapCompleted: state.mapCompleted,
    selectedYear: state.selectedYear,
    currentPopup: state.currentPopup,
    yearPlatesCount: state.yearPlatesCount,
    showSidePanelPlates: state.showSidePanelPlates,
    videoPlayPauseLiveText: data.videoPlayPauseLiveText,
    completionVideoLiveText: data.completionVideoLiveText,
  };
};

const mapDispatch = (dispatch) => ({
  onRotateClick: () => {
    dispatch(thunks.onRotateClick());
  },
  submitPlates: (dragPlate, dropAccept, item) => {
    dispatch(thunks.submitPlates(dragPlate, dropAccept, item));
    dispatch(
      updateCanvasData({
        200: null,
        150: null,
        100: null,
      })
    );
  },
  updateCanvasData: (val) => {
    dispatch(updateCanvasData(val));
  },
  updateLiveText: (val) => {
    dispatch(common.ariaLiveText(val));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
  setVideoLiveText: (liveText) => {
    console.log("setVideoLiveText called");
    dispatch(common.thunks.ariaLiveAssertive(liveText));
  },
});

export default connect(mapState, mapDispatch)(LeftComponent);
