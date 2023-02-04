import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  hideTooltip: true,
  paused: state.isPaused,
  question: data.waveControlLabel,
  isPopupActive: !!state.currentPopup.length,
  buttonText: state.isPaused ? data.playWave : data.stopWave,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.togglePause());
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
