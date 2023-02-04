import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  infoPopupText: data.infoPopupText,
  resetPopupText: data.resetPopupText,
  questionAnswered: state.questionAnswered,
  showToastMessage: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  activityDescription: data.activityDescription,
  introductionPopupText: data.introductionPopupText,
  introductionPopupImageAlt: data.introductionPopupImageAlt,
});

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.generateNextQuestion());
  },
});

export default connect(mapState, mapDispatch)(Activity);
