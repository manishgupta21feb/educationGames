import { connect } from "react-redux";
import { common } from "../actions";
import ViewArea from "../components/ViewArea";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    screenVal: state.screenVal,
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(ViewArea);
