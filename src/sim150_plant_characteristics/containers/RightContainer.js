import { connect } from "react-redux";
import simData from "../data";
import RightPanel from "../components/RightView";

const mapState = (state) => {
  return {
    activityMode: state.getActivityMode,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightPanel);
