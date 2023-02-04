import { connect } from "react-redux";
import simData from "../data";
import LeftPanel from "../components/LeftView";

const mapState = (state) => {
  return {
    activityMode: state.getActivityMode,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftPanel);
