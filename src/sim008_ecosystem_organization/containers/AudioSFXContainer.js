import { connect } from "react-redux";
import { setPreviousSound } from "../actions";
import AudioSFX from "../components/AudioSFX";

import data from "../data";

const mapState = (state) => ({
  sounds: data.sounds,
});

const mapDispatch = (dispatch) => ({
  setPreviousSound: (id) => {
    dispatch(setPreviousSound(id));
  },
});
export default connect(mapState, mapDispatch)(AudioSFX);
