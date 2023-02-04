import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    activityHeading: data.activityHeading,
    informationTextSecond:data.infoContentfirst,
    informationTextFirst: data.infoContentsecond,
    selectedHotspot: state.selectedHotspot,
    resetDialogText: data.resetPopupText,
    initialInfoDialog: data.initialInfoDialog,
    isPopupActive: !!state.currentPopup.length,
    firstcarvscarVisited: state.firstcarvscarVisited,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
