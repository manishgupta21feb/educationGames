import { connect } from "react-redux";
import LeftScreen from "../components/ViewArea/LeftRightScreen";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    ifSubScreen: state.subScreen,
    text: state.selectedQuestion.screen1Txt,
    questionScreen1: state.selectedQuestion.id,
    staticImgTxt: state.selectedQuestion.imgTxt,
    topStaticAltTxt: state.selectedQuestion.topStaticAltTxt,
    topScreen2AltTxt: state.selectedQuestion.topScreen2AltTxt,
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(LeftScreen);
