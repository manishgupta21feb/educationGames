import { connect } from "react-redux";
import LeftScreen2 from "../components/ViewArea/LeftRightScreen/Screen2/index.js";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    ifSubScreen: state.subScreen,
    text: state.selectedQuestion.screen1Txt,
    questionScreen2: state.selectedQuestion.id,
    question: state.selectedQuestion,
    valueLiveArray: state.selectedQuestion.valueLiveArray,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    callarialive: (val) => {
      dispatch(common.ariaLiveText(val));

      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 150);
    },
    onClickPlay: () => {
      EventManager.broadcast("SECONDARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(LeftScreen2);
