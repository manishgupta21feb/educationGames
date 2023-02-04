import Soil from "../components/FullView/Soil";
import { connect } from "react-redux";

import { common, setCurrentSection } from "../actions";
import simData from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    Soils: simData.Soils[state.getCurrentSoil],
    continueLabel: simData.buttonLabels.continue,
  };
};

const mapDispatch = (dispatch) => ({
  onTopSoilSection: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(setCurrentSection("soilChoice"));
  },
});

export default connect(mapState, mapDispatch)(Soil);
