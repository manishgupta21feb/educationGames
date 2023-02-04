import { connect } from "react-redux";
import ViewArea from "../components/ViewArea/index.js";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    viewScreen: state.viewScreen,
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(ViewArea);
