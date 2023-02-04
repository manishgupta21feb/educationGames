import { connect } from "react-redux";
import Screen1Screen from "../components/ViewArea/Screen1/index.js";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    imgTxt: data.screen1.imgTxt,
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(Screen1Screen);
