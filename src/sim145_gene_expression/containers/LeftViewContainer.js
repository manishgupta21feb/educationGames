import { connect } from "react-redux";
import LeftArea from "../components/LeftView/index.js";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    currentScreen: state.sim145CurrentScreen,
    lastScreenPart: state.lastScreenPart,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftArea);
