import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { common, setSelectTime, setPlotState } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    heading: data.timeHeading,
    options: state.vehicleData.timeData,
    value: state.selectTime,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (val) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(setSelectTime({ ...val }));
      dispatch(setPlotState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
