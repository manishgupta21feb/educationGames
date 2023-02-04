import { connect } from "react-redux";
import { common } from "../actions";
import TopData from "../components/ViewArea/VideoArea/TopData.js";
import data from "../data/index";

const mapState = (state) => {
  return {
    data: data,
    selectedVehicleData: state.vehicleData,
    screenVal: state.screenVal,
    videoTime: state.videoTime,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(TopData);
