import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => ({
  data: data,
  isPopupActive: !!state.currentPopup.length,
  activityHeading: data.activityHeading,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
