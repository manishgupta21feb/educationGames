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
    text: {
      infoPopupText: data.infoPopupText,
      resetPopupText: data.resetPopupText,
      activityDescription: data.activityDescription,
      introductionPopupText: data.introductionPopupText,
      introductionPopupImage1Alt: data.introductionPopupImage1Alt,
      introductionPopupImage2Alt: data.introductionPopupImage2Alt,
    },
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(thunks.onInit());
  },
});

export default connect(mapState, mapDispatch)(Activity);
