import {connect} from "react-redux";
import Hotspot from "../components/Screens/ScreenOne/Hotspot";
import data from "../data";
import { thunks,common } from "../actions";
const mapState=(state)=>{
    return {
      bgAlt:data.bgAltText,
      heading:data.screen0,
      hotspots:state.hotspots,
      isPopupActive: !!state.currentPopup.length,
      selectedHotspot:state.selectedHotspot,
      hotspotVisitAlt:data.hotspotVisitAlt,
      isVideoVisible:state.isVideoVisible,
      activeIndex:state.selectQuestionIndex,
    }
}

const mapDispatch =(dispatch) =>({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.selectHotspot(id));
},
});

export default connect(mapState,mapDispatch)(Hotspot)