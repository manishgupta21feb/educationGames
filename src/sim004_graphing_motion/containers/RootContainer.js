import Root from "../components";
import { connect } from "react-redux";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    ariaLiveText: state.ariaLiveText
  }
};

const mapDispatch = (dispatch) => ({
  sounds: data.sounds
});

export default connect(mapState, mapDispatch)(Root);
