import { connect } from "react-redux";
import MainScreen from '../components/TopSection/MainScreen';
import data from '../data';
import {
  thunks,
  common,
  isVideoEnded,
  videoLiveText
} from '../actions';

const mapState = (state) => ({
  objectHotspot: data.hotspotData,
  selectedHotspot: state.selectedHotspot,
  visitedHotspots: state.visitedHotspots,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(thunks.selectHotspot(id));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("SECONDARY_CLICK");
    if (id == 1) {
      dispatch(videoLiveText(data.oilDrillingLiveText));
    } else
    if (id == 3) {
      dispatch(videoLiveText(data.artificialReefLiveText));
    }
    if (id == 1 || id == 3) {
      dispatch(isVideoEnded(true));
    }
  }
});

export default connect(mapState, mapDispatch)(MainScreen);
