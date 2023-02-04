import Root from "../components";
import { connect } from "react-redux";

import data from "../data";

const mapState = (state) => {
  return {
    sounds: data.sounds,
    ariaLiveText: state.ariaLiveText
  }
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Root);
