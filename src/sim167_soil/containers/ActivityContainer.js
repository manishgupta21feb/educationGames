import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";

import simData from "../data";

const mapState = (state) => {
  let _count = state.getCurrentLocation == "dnd" ? 1 : 0;

  return {
    imagesArray: simData.imagesArr,
    isPopupActive: !!state.currentPopup.length,
    currentSection: state.getCurrentSection,
    introContent: simData.introContent,
    activityHeading: simData.simHeading,
    toastMsg: state.toastMsg,
    showToastMessage: state.showToastMessage,
    hintData: simData.hint[_count],
    resetDialogText: simData.resetPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
