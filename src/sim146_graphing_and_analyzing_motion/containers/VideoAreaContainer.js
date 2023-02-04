import { connect } from "react-redux";
import { common, setContinueState } from "../actions";
import VideoArea from "../components/ViewArea/VideoArea";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    ifMainScreen: state.mainScreen,
    screenVal: state.screenVal,
    selectedVehicleData: state.vehicleData,
    currentPopup: state.currentPopup,
    videoTime: state.videoTime,
  };
};

const matchDispatch = (dispatch) => ({
  setContinueState: (val) => {
    dispatch(setContinueState(false));
  },
});

export default connect(mapState, matchDispatch)(VideoArea);
