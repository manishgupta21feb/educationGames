import { connect } from "react-redux";
import { togglePopup } from "../actions";
import { thunk, setResetBtnState } from "../actions/activity";
import Activity from "../components/activity";

import data from "../data";

const mapState = (state) => {
  return {
    helpPopupText: data.helpPopupText,
    resetPopupText: data.resetPopupText,
    isPopupActive: !!state.currentPopup.length,
    initialInfoPopupText: data.initialInfoPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onMount: () => {
    dispatch(togglePopup(1));
    dispatch(thunk.activityLoaded());
    dispatch(setResetBtnState(true));
  },
});

export default connect(mapState, mapDispatch)(Activity);
