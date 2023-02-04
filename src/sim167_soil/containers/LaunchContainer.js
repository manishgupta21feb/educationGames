import Launch from "../components/FullView/Launch";
import { connect } from "react-redux";

import { thunk, common } from "../actions";
import simData from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    launchPageData: simData.launchPageData,
    sections: simData.soilTypes,
    soilViewData: state.getSoilViewData,
  };
};

const mapDispatch = (dispatch) => ({
  onLocationChange: (data, index) => {
    dispatch(thunk.updateSoil(data, index));
  },
});

export default connect(mapState, mapDispatch)(Launch);
