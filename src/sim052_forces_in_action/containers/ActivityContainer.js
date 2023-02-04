import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";

const mapState = (state) => {
  const _data = state.getData;
  return {
    //----> From Data
    introText: _data.introText,
    infoText: _data.infoText[state.getLevel],
    resetPopupText: _data.resetPopupText,
    observationMotive: _data.observationMotive,
    feedTostMessage:
      state.getCurrentVideo != 0
        ? _data.tugOfWarVideos[state.getCurrentVideo - 1].tostContent
        : "",

    //----From Redux
    isPopupActive: !!state.currentPopup.length,
    videoEnded: state.getVideoEnded,
    showToastMessage: state.showToastMessage,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
