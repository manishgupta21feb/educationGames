import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    introText: data.introText,
    infoText: data.infoText,
    resetPopupText: data.resetPopupText,
    observationMotive: data.observationMotive,

    //----From Redux
    isPopupActive: !!state.currentPopup.length,
    checkAnswer: state.getIsAnswerCorrect,
    showToastMessage: state.showToastMessage,
    secondScreen: state.secondScreen,
    getScreenNumber: state.getScreenNumber,
    getScreenNumber_btn: state.getScreenNumber.btn,
    getScreenNumber_screen: state.getScreenNumber.screen,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
