import { connect } from "react-redux";
import { thunks } from "../actions/index";
import { common } from "../actions";
import GraphAnimation from "../components/ViewArea/TwoGraphAnimation/graphAnimation";
import data from "../data/index";

const mapState = (state) => {
  let graphAlt = state.altForGraph;
  graphAlt = graphAlt.replace("truck", state.vehicleData.text);
  return {
    data: data,
    graphHeading: state.vehicleData.graphHead,
    isPopupActive: !!state.currentPopup.length,
    selectedVehicleData: state.vehicleData,
    selectDistance: state.selectDistance,
    selectTime: state.selectTime,
    plot: state.plot,
    plotState: state.plotState,
    altForGraph: graphAlt,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(GraphAnimation);
