import Activity from "../components/activity";
import { connect } from "react-redux";

import { thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    currentScreen: state.currentScreen,
    questionAnswered: state.questionAnswered,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    allImagesData: data.allImagesData,
    isToggle: state.toggleDialog,
    toastMsg: state.toastMsg,
    radioQuestions: state.questionsData,
    text: {
      infoPopupText: data.infoPopupText,
      resetPopupText: data.resetPopupText,
      introductionPopupText: data.introductionPopupText,
      pageHeading: data.pageHeading,
    },
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(thunks.onInit());
  },
});

export default connect(mapState, mapDispatch)(Activity);
