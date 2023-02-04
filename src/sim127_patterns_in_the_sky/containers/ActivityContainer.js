import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data/data.en";

const mapState = (state) => ({
  imagesArray: data.imagesArray,
  activeScreen: state.activeScreen,
  resetPopupText: data.resetPopupText,
  screen1InfoText: data.screen1InfoText,
  screen2InfoText: data.screen2InfoText,
  questionAnswered: state.questionAnswered,
  showToastMessage: state.showToastMessage,
  activityObjective: data.activityObjective,
  isPopupActive: !!state.currentPopup.length,
  introductionPopupText: data.introductionPopupText,
});

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
