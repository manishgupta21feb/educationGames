import { connect } from "react-redux";
import LocationAUp from "../components/locations/upperSection";

import data from "../data";

const mapState = (state) => {
  return {
    locationData: { ...data[state.currentLocation] },
    currentLocation: state.currentLocation,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(LocationAUp);
