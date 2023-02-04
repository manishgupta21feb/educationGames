import { connect } from "react-redux";
import Mass from "../../app/components/Select";

import data from "../data";
import { setElectrons, common } from "../actions";

const mapState = (state) => {
  return {
    options: data.valuesMass,

    isPopupActive: !!state.currentPopup.length,
    heading: data.pendulumHeadings.massHeading,
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(Mass);
