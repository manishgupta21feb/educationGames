import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => ({
  data: data,
  selectedHotspot: state.selectedHotspot,
  isPopupActive: !!state.currentPopup.length,
  visitedHotspots: state.visitedHotspots,
  activityHeading: data.activityHeading,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
