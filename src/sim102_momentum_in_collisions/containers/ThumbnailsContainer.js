import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import ThumbnailsComponent from "../components/activity/Thumbnails";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    thumbHeading:data.thumbHeading,
    selectedHotspot: state.selectedHotspot,
    visitedHotspot: state.setVisitedData,
    isPopupActive: !!state.currentPopup.length,
    selectedHotspot: state.selectedHotspotIndex,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },

  onClickButton: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");

    dispatch(thunks.selectHotspot(id));
  },
});

export default connect(mapState, mapDispatch)(ThumbnailsComponent);
