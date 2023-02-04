import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";

import data from "../../app/data";
import simData from "../data";

const mapState = (state) => {
  let currentHint = state.getCurrentSection == "launch" ? 0 : 1;
  return {
    isPopupActive: !!state.currentPopup.length,
    resetDialogText: data.resetPopupText,
    infoContent: simData.infoContent,
    hintContent: simData.hintContent[currentHint],
    imagesArray: simData.imagesArr,
    simHeading: simData.simHeading,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
