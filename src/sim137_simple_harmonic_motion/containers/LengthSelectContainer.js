import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setElectrons, common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    heading: data.pendulumHeadings.lengthHeading,
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(Select);
