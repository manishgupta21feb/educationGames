import Activity from "../components/activity";
import { connect } from "react-redux";
import { common } from "../actions";
import data from '../data';

const mapState = (state) => ({
  data: data,
  activityHeading: data.activityHeading,
  isPopupActive: !!state.currentPopup.length,
  zindexStatus: state.zindexStatus
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
