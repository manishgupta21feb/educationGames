import { connect } from "react-redux";
import Screen1Top from '../components/activity/TopBottomScreen/TopSection/Screen1Top';
import data from '../data';
import { 
  common,
  selectHotspot,
  updateVisitedHotspot,
  setNextButtonClickState
} from '../actions';

const mapState = (state) => ({
  screen1HotspotData: data.screen1HotspotData,
  selectedHotspot: state.selectedHotspot,
  visitedHotspots: state.visitedHotSpot,
  isPopupActive: !!state.currentPopup.length,
  topScreenImgText: data.topScreenImgText,
  imgAltTexts: data.imgAltTexts
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(selectHotspot(id));
    dispatch(updateVisitedHotspot(id));
    dispatch(common.setResetFocusState(true));
    dispatch(setNextButtonClickState(false));
    dispatch(common.updateResetBtnState(false));
  }
});

export default connect(mapState, mapDispatch)(Screen1Top);
