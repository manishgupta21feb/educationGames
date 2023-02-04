import { connect } from "react-redux";
import Video from "../../app/components/Video";

import data from "../data";
import { thunks, setVideoPlayed } from "../actions";

const mapState = (state) => ({
  buttonLabels: data.buttonLabels,
  currentPopup: state.currentPopup,
  question: { ...state.selectedVideo },
});

const matchDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(thunks.onVideoEnded());
  },
  canPlayThrough: () => {
    dispatch(setVideoPlayed(true));
  },
});

export default connect(mapState, matchDispatch)(Video);
