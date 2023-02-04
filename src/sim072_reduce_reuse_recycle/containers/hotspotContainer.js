import { connect } from "react-redux";
import HotspotSection from "../components/hotspotView";

import data from "../data";
import { thunk, setResetBtnState, common } from "../actions";

const mapState = (state) => ({
    about:data.about,
    heading: data.hotspotHeading,
    hotspots: state.hotspots,
    selectedHotspot: state.selectedHotspot,
    isPopupActive: !!state.currentPopup.length,
    altVisited:data.altVisited
})

const matchDispatch = (dispatch) => ({
    onClick: (id) => {
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(thunk.selectHotspot(id));
    },
    selectHotspot: (id) => {
        dispatch(thunk.selectHotspot(id));
    },
});

export default connect(mapState, matchDispatch)(HotspotSection);