import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    activityHeadingOne:data.activityHeadingOne,
    activityHeadingTwo:data.activityHeadingTwo,
    currentScreen: state.currentScreen,
    correctAnswer: state.correctAnswer,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    popupText: {
      resetPopupText: data.resetPopupText,
      infoPopupTextScreen1: data.infoPopupTextScreen1,
      infoPopupTextScreen2: data.infoPopupTextScreen2,
      introductionPopupText: data.introductionPopupText,
      introductionPopupImageAlt: data.introductionPopupImageAlt,
    },
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    // dispatch(common.onChangeScreen(2));
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
