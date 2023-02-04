import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    //From Data
    introText: data.introText,
    infoText: data.infoText,
    resetPopupText: data.resetPopupText,

    //From State
    isPopupActive: !!state.currentPopup.length,
    answer: state.getAnswer,
    showToastMessage: state.showToastMessage,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
