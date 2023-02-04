import { connect } from "react-redux";
import { common, thunks } from "../actions";
import HotspotArea from "../components/Screens/TopBottom/HotspotArea/index";
import data from "../data";

const mapState = (state) => ({
  helpPopupText: data.activityHeading,
  isPopupActive: !!state.currentPopup.length,
  hotspots: state.hotspots,
  selectedHotspot: state.selectedHotspot,
  moveToAnimation:state.toggleScreen,
  visitedHotspot:state.visitedHotspot,
  bgAltText:data.bgAltText,
  isTravserHotspot:state.isTravserHotspot,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    setTimeout(() =>{
      dispatch(common.setResetFocusState(true))}
      ,150);
    dispatch(thunks.selectHotspot(id));
  },
});

export default connect(mapState, matchDispatch)(HotspotArea);
