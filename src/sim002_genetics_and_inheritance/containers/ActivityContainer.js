import Root from "../components/activity";
import { connect } from "react-redux";
import { togglePopup } from "../actions";

import data from "../data";

const mapState = (state) => {
  const useInfo = state.appData.messages["use"];
  const reset = state.appData.messages["reset"];
  const initialInfo = state.appData.messages["initialInfo"];
  const info = state.appData.messages["info"];
  return {
    isPopupActive: !!state.currentPopup.length,
    resetDialogText: reset.descText,
    initialDialogText: initialInfo.descText,
    useInfoDialogText: info.descText,
    informationDialogText: useInfo.descText,
    showLimitWarning: state.showLimitWarning,
    activityHeading: data.activityHeading,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Root);
