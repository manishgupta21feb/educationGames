import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { common, setPlotState, setSelectDistance, thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    heading: data.distanceHeading,
    options: state.vehicleData.distanceData,
    value: state.selectDistance,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (val) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(setSelectDistance({ ...val }));
      dispatch(setPlotState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
