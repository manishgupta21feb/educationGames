import Launch from "../components/FullView/Launch";
import { connect } from "react-redux";

import { common, setCurrentSection } from "../actions";
import simData from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    launchPageData: simData.launchPageData,
  };
};

const mapDispatch = (dispatch) => ({
  onLocationChange: (data) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setCurrentSection(data));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(Launch);
