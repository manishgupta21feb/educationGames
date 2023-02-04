import { connect } from "react-redux";
import Screen5Top from '../components/activity/TopBottomScreen/TopSection/Screen5Top';
import data from '../data';
import {
  selectHotspot,
  updateVisitedHotspot,
  setNextButtonClickState
} from '../actions';

const mapState = (state) => ({
  screen5HotspotData: data.screen5HotspotData,
  selectedHotspot: state.selectedHotspot,
  visitedHotspots: state.visitedHotSpot,
  isPopupActive: !!state.currentPopup.length,
  topScreenImgText: data.topScreenImgText,
  imgAltTexts: data.imgAltTexts
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setNextButtonClickState(false));
    dispatch(selectHotspot(id));
    dispatch(updateVisitedHotspot(id));
  }
});

export default connect(mapState, mapDispatch)(Screen5Top);
