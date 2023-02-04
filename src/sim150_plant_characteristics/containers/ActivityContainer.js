import Activity from "../components/activity";
import { connect } from "react-redux";
import simData from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    imagesArray: simData.imagesArr,
    isPopupActive: !!state.currentPopup.length,
    simHeading: simData.simHeading,
    infoContent: simData.introData,
    hint:
      state.getActivityMode == "structure"
        ? simData.hints[0]
        : simData.hints[1],
    toastMsg: state.setToastMsg,
    showToastMessage: state.showToastMessage,
    resetPopupText: simData.resetPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
