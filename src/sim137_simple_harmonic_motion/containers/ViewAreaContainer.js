import { connect } from "react-redux";
import { common } from "../actions";
import ViewArea from "../components/ViewArea";
import data from "../data/index";

const mapState = (state) => {
  return {
    data: data,
    ifMainScreen: state.mainScreen,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(ViewArea);
