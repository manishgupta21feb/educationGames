import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    //-----> From Data
    introductoryText: data.introductoryText,
    infoText: data.information,
    resetPopupText: data.resetPopupText,
    observationMotive: data.observationMotive,

    //-----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    checkAns: state.checkAnswerReducer,
    dragDropComplete: state.dragDropCompleteReducer,
    levelOneComplete: state.levelOneCompleteReducer,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
