import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    helpPopupText: data.helpPopupText,
    resetPopupText: data.resetPopupText,
    initialPopupText: data.initialPopupText,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    // dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
