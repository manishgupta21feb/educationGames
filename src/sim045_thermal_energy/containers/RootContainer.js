import Root from "../components";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    ariaLiveText: state.ariaLiveText,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Root);
