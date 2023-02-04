import { connect } from "react-redux";
import Right from "../components/ViewArea/LeftRightScreen/Screen2/Right.js";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    ifSubScreen: state.subScreen,
    text: state.selectedQuestion.screen1Txt,
    questionScreen1: state.selectedQuestion.id,
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(Right);
