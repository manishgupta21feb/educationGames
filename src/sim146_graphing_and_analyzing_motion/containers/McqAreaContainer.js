import { connect } from "react-redux";
import { thunks } from "../actions/index";
import { common } from "../actions";
import McqArea from "../components/ViewArea/McqArea";
import data from "../data/index";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    selectedVehicle: state.vehicleData,
    correctAnswerMcq: state.correctAnswerMcq,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(McqArea);
