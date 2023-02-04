import Root from "../components";
import { connect } from "react-redux";

import data from "../data";

const mapState = (state) => {
  return {
    sounds: data.sounds,
    narrators: data.ecosystemContent,
    ariaLiveText: state.ariaLiveText,
    currentPopup: state.currentPopup,
    audioStatePlay: state.audioStatePlay,
    selectedQuestion: state.selectedQuestion,
    feedbackNarration: state.feedbackNarration,
    showStatic: state.showStatic,
    selectedOrganisms: state.selectedOrganisms,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Root);
