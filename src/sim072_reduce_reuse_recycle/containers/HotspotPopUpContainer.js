import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import HotspotPopup from "../components/hotspotView/hotspotPopup";

import data from "../data";
import { selectHotspot } from "../actions";

const mapState = (state) => {
    const hotspot = state.hotspots.filter(
        (h) => h.id == state.selectedHotspot
    )[0];
    return {
        hotspotDetails: hotspot.details,
        selectedHotspot: state.selectedHotspot,
        isPopupActive: !!state.currentPopup.length,
    }
};

const mapDispatch = (dispatch) => ({
    closePopUp:()=>{
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(selectHotspot(''));
    }
});

export default connect(mapState, mapDispatch)(HotspotPopup);