import TopSoil from "../components/FullView/TopSoil";
import { connect } from "react-redux";

import { thunk, common } from "../actions";
import simData from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    topSolis: simData.topSoilDetails[state.getCurrentSoil],
    topSoilHeading: simData.topSoilHeading[state.getCurrentSoil],
    buttonsName: simData.topSoil,
    buttonContent: simData.buttonLabels.next,
    cardAriaLive: simData.cardFlipAnnounce,
  };
};

const mapDispatch = (dispatch) => ({
  onCompletion: () => {
    dispatch(thunk.soilCompletion());
  },
  resetHandler: (ariaContent) => {
    dispatch(common.setResetFocusState(true));
    dispatch(thunk.ariaLivePointer(ariaContent));
  },
});

export default connect(mapState, mapDispatch)(TopSoil);
