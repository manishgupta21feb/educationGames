import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    text: {
      infoPopupText: data.infoPopupText,
      resetPopupText: data.resetPopupText,
      introductionPopupText: data.introductionPopupText,
    },
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
