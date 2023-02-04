import { connect } from "react-redux";
import { common, thunks, setContinueState } from "../actions";
import Video from "../../app/components/Video";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    ifMainScreen: state.mainScreen,
    screenVal: state.screenVal,
    selectedVehicleData: state.vehicleData,
    currentPopup: state.currentPopup,
    buttonLabels: data.buttonLabels,
    question: state.vehicleData,
  };
};

const matchDispatch = (dispatch) => ({
  onTimeUpdate: (e) => {
    dispatch(thunks.videoTimeDistance(e));
  },
  onVideoEnded: () => {
    dispatch(setContinueState(false));
  },
  playStateToggled: (playState) => {
    if (playState) {
      dispatch(thunks.setLive());
    }
  },
});

export default connect(mapState, matchDispatch)(Video);
